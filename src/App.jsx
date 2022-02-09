import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import './App.css';
import ToDoAdder from './components/ToDoAdder';
import ToDoAppBar from './components/ToDoAppBar';
import ToDoCard from './components/ToDoCard';

function App() {
  const [toDoItems, setTodoItems] = useState([])

  const addToDo = (newTodoItem) => setTodoItems([
    ...toDoItems,
    newTodoItem
  ])

  const removeToDo = (toDoToRemove) => {
    setTodoItems(toDoItems.filter(currentToDoItem => currentToDoItem.id !== toDoToRemove.id))
  }

  return (
    <Container disableGutters>
      <ToDoAppBar />
      <Grid container padding={1} rowGap={1} columnGap={1}>
        <ToDoAdder item
          addToDo={addToDo}
        />
        {toDoItems.map((toDoItem, index) => (
          <ToDoCard
            key={index}
            toDoItem={toDoItem}
            removeToDo={removeToDo}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default App;
