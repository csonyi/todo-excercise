export default class ToDo {
  constructor(title, description, id, done = false) {
    this.title = title
    this.description = description
    this.id = id || ToDo.nextId++
    if (id) {
      ToDo.nextId = ++id
    }
    this.done = done
  }

  static nextId = 0
  
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
