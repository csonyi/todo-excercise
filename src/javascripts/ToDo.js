export default class ToDo {
  constructor(title, description) {
    this.id = ToDo.nextId++
    this.title = title
    this.description = description
    this.done = false
  }

  static nextId = 0;
  
  markDone() {
    this.done = true
  }

  setTitle(title) {
    this.title = title
  }

  setDescription(description) {
    this.description = description
  }
}
