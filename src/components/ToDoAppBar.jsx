import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import ClearAllIcon from '@mui/icons-material/ClearAll';

import { useState } from 'react'

import LSHandler from '../javascripts/LocalStorageHandler'


const ToDoAppBar = ({ toDoItems, setDisplayedItems, setToDoItems }) => {
  const [queryString, setQueryString] = useState('')

  const filterToDoItems = (queryString) => toDoItems.filter(toDoItem => {
    return toDoItem.title.includes(queryString)
        || toDoItem.description.includes(queryString) 
  })

  const onQueryStringChange = ({ target: { value }}) => {
    setQueryString(value)
    const itemsToDisplay = filterToDoItems(value)
    setDisplayedItems(itemsToDisplay)
  }

  const onFocus = () => {
    const itemsToDisplay = filterToDoItems(queryString)
    setDisplayedItems(itemsToDisplay)
  }

  const armageddon = () => {
    setToDoItems([])
    setDisplayedItems([])
    LSHandler.clearStorage()
  }

  return (
    <AppBar position='static' sx={{ borderRadius: 1 }}>
      <Container>
        <Toolbar disableGutters>
          <Stack
            width={1150}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant='h5'
              noWrap
              component='div'
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, flexGrow: 2 }}
            >
              ToDo Excersize
            </Typography>
            <TextField sx={{ marginBottom: '10px', marginRight: '20px' }}
              size='small'
              label='Search'
              variant='standard'
              value={queryString}
              onChange={onQueryStringChange}
              onFocus={onFocus}
            />
            <Tooltip title='Clear localstorage'>
              <IconButton onClick={armageddon}>
                <ClearAllIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ToDoAppBar