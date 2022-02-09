import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ToDoAdder from './components/ToDoAdder';
import ToDoAppBar from './components/ToDoAppBar';
import ToDoCard from './components/ToDoCard';

import { useState } from 'react';

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
      <Grid container
        padding={1}
        rowGap={1}
        columnGap={1}
        justifyContent='flex-start'
      >
        <ToDoAdder item xs={3}
          addToDo={addToDo}
        />
        {toDoItems.map((toDoItem, index) => (
          <ToDoCard item xs
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
