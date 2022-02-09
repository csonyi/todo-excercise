import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LSHandler from './javascripts/LocalStorageHandler'

const locallyStoredToDos = LSHandler.loadToDos()

ReactDOM.render(
  <React.StrictMode>
    <App locallyStoredToDos={locallyStoredToDos} />
  </React.StrictMode>,
  document.getElementById('root')
)

