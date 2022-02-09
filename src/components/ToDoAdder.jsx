import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

import { useState } from 'react';

import ToDo from '../javascripts/ToDo'

const ToDoAdder = ({ addToDo }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onTitleChange = ({ target: { value: newTitle }}) => setTitle(newTitle)
  const onDescriptionChange = ({ target: { value: newDescription }}) => setDescription(newDescription)

  const onAddNew = () => (title || description) && addToDo(new ToDo(title, description))
  const onClearFields = () => {
    setTitle('')
    setDescription('')
  }

  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Stack spacing={2}>
          <Typography gutterBottom variant='h5' component='div'>
            Add New ToDo
          </Typography>
          <TextField
            id='newTodoTitle'
            label='Title'
            variant='outlined'
            onChange={onTitleChange}
            value={title}
          />
          <TextField
            id='newTodoDescription'
            label='Description'
            variant='filled'
            multiline
            minRows={4}
            onChange={onDescriptionChange}
            value={description}
          />
        </Stack>
      </CardContent>
      <CardActions>
      <Stack
        width={350}
        direction='row'
        justifyContent='space-evenly'
      >
        <IconButton onClick={onAddNew}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={onClearFields}>
          <ClearIcon />
        </IconButton>
      </Stack>
      </CardActions>
    </Card>
  );
};

export default ToDoAdder;