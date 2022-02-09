import ToDo from "./ToDo"

const localStorage = window.localStorage
const STORAGE_KEY = 'TODO_LIST'

export default class LocalStrorageHandler {

  static saveToDos(toDoList) {
    const json = JSON.stringify(toDoList)
    localStorage.setItem(STORAGE_KEY, json)
  }
  
  static loadToDos() {
    const objectList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    const classList = objectList.map(object => new ToDo(
      object.title,
      object.description,
      object.id,
      object.done
    ))
    return classList
  }

  static clearStorage() {
    localStorage.removeItem(STORAGE_KEY)
  }

}