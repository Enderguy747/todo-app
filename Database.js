const { localStorage } = window
export default class Database {
  constructor () {
    this.todos = JSON.parse(localStorage.getItem('todos'))
    if (!this.todos || this.todos.length < 1) {
      this.todos = [
        {
          id: 0,
          title: 'Learn React',
          description: 'Learn React'
        }
      ]
      this.currentId = 1
    } else {
      this.currentId = this.todos[this.todos.length - 1].id + 1
    }
  }

  addTodos ({ title, description }) {
    const todosObject = {
      id: this.currentId,
      title,
      description
    }
    this.todos.push(todosObject)
    console.log(this.todos)
    return this.saveTodos()
  }

  saveTodos () {
    try {
      localStorage.setItem('todos', JSON.stringify(this.todos))
      return true
    } catch (e) {
      console.log(e.message)
      return false
    }
  }

  getTodos () {
    return JSON.parse(localStorage.getItem('todos'))
  }

  setId (id) {
    this.id = id
  }

  setTitle (title) {
    this.title = title
  }

  setDescription (description) {
    this.description = description
  }
}
