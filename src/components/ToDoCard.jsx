import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { IconButton, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const EditModeContent = ({ toDoItem }) => {
  const [title, setTitle] = useState(toDoItem.title)
  const [description, setDescription] = useState(toDoItem.description)

  const onTitleChange = ({ target: { value: newTitle }}) => {
    toDoItem.setTitle(newTitle)
    setTitle(newTitle)
  }
  const onDescriptionChange = ({ target: { value: newDescription }}) => {
    toDoItem.setDescription(newDescription)
    setDescription(newDescription)
  }

  return (
    <CardContent>
      <Stack spacing={2}>
        <TextField
          id='newTodoTitle'
          label='Title'
          variant='outlined'
          value={title}
          onChange={onTitleChange}
          />
        <TextField
          id='newTodoDescription'
          label='Description'
          variant='filled'
          multiline
          minRows={4}
          value={description}
          onChange={onDescriptionChange}
        />
      </Stack>
    </CardContent>
  )
}

const ReadModeContent = ({ toDoItem }) => (
  <CardContent>
    <Stack spacing={2}>
      <Typography gutterBottom variant="h5" component="div"
        sx={toDoItem.done && { textDecoration: 'line-through' }}
      >
        {toDoItem?.title}
      </Typography>
      <Typography gutterBottom variant='body1' component="div"
        sx={toDoItem.done && { textDecoration: 'line-through' }}
      >
        {toDoItem?.description}
      </Typography>
    </Stack>
  </CardContent>
)

const ToDoCard = ({ toDoItem, removeToDo }) => {
  const [editMode, setEditMode] = useState(false)
  const [isDone, setDone] = useState(toDoItem.done)

  const toggleEditMode = () => setEditMode(!editMode)
  
  const onMarkDone = () => {
    toDoItem.markDone()
    setDone(toDoItem.done)
  }

  return (
    <Card sx={{ minWidth: 256, maxWidth: 345 }}>
      <Stack
        height='100%'
        direction="column"
        alignItems='flex-start'
        justifyContent='space-between'
        spacing={2}
      >
        { editMode 
          ? <EditModeContent toDoItem={toDoItem} />
          : <ReadModeContent toDoItem={toDoItem} />
        }
        <CardActions>
          <Stack
            width={256}
            direction='row'
            justifyContent='space-evenly'
          >
            { !isDone &&
              <IconButton onClick={toggleEditMode}>
                { editMode
                  ? <SaveIcon />
                  : <EditIcon />
                }
              </IconButton>
            }
            <IconButton onClick={() => removeToDo(toDoItem)}>
              <DeleteIcon />
            </IconButton>
            { !(isDone || editMode) && 
              <IconButton onClick={onMarkDone}>
                <DoneIcon />
              </IconButton>
            }
          </Stack>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default ToDoCard;