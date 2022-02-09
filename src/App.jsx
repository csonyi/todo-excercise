import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ToDoAdder from './components/ToDoAdder'
import ToDoAppBar from './components/ToDoAppBar'
import ToDoCard from './components/ToDoCard'

import { useState } from 'react'

import LSHandler from './javascripts/LocalStorageHandler'

function App({ locallyStoredToDos }) {
  const [toDoItems, setToDoItems] = useState(locallyStoredToDos)
  const [displayedItems, setDisplayedItems] = useState(toDoItems)

  const addToDo = (newTodoItem) => {
    const newToDoItems = [...toDoItems, newTodoItem]
    setToDoItems(newToDoItems)
    setDisplayedItems(newToDoItems)
    LSHandler.saveToDos(newToDoItems)
  }
  
  const removeToDo = (toDoToRemove) => {
    const newToDoItems = toDoItems.filter(currentToDoItem => currentToDoItem.id !== toDoToRemove.id)
    setToDoItems(newToDoItems)
    setDisplayedItems(newToDoItems)
    LSHandler.saveToDos(newToDoItems)
  }

  return (
    <Container disableGutters>
      <ToDoAppBar
        toDoItems={toDoItems}
        setDisplayedItems={setDisplayedItems}
        setToDoItems={setToDoItems}
      />
      <Grid container
        padding={1}
        rowGap={1}
        columnGap={1}
        justifyContent='flex-start'
      >
        <ToDoAdder item
          addToDo={addToDo}
        />
        {displayedItems.map((toDoItem, index) => (
          <ToDoCard item
            key={index}
            toDoItem={toDoItem}
            removeToDo={removeToDo}
            saveToLS={() => LSHandler.saveToDos(toDoItems)}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default App
