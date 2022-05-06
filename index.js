import Database from './Database.js'
const $form = document.getElementById('form')
const $title = document.getElementById('titleField')
const $description = document.getElementById('descriptionField')
const $resetDataBase = document.getElementById('resetDataBase')
const $field = document.querySelector('.todos')
const $deleteTodo = document.querySelectorAll('.delete-todo')
const { alert, location } = window
const database = new Database()

function handleSubmit (title = '', description = '') {
  if (title.length === 0 || description.length === 0) {
    alert('Not all fields are filled out')
    return
  }

  const todosObject = {
    title,
    description
  }
  saveTodo(todosObject) ? alert('Data saved successfully') : alert('Data not saved')
  $title.value = ''
  $description.value = ''
  render()
}

const saveTodo = (todosObject) => {
  return database.addTodos(todosObject)
}

$resetDataBase.addEventListener('click', () => {
  alert('Data reset successfully')
  database.resetDataBase()
  location.reload()
  render()
})

$deleteTodo.addEventListener('click', (e) => {
  const todoId = e.target.parentNode.querySelector('input').value
  console.log(todoId)
})

$form.addEventListener('submit', function (e) {
  e.preventDefault()
  handleSubmit($title.value, $description.value)
})

document.addEventListener('DOMContentLoaded', () => {
  render()
})

document.onkeydown = function (e) {
  if (e.key === 'Enter') {
    handleSubmit($title.value, $description.value)
  }
}

const render = () => {
  const todos = database.getTodos()
  todos.forEach(todo => {
    $field.innerHTML += `
      <div class="todo">
        <input type="hidden" value="${todo.id}" />
        <h3 class="todo-title">${todo.title}</h3>
        <p class="todo-description">${todo.description}</p>
        <button class="delete-todo">Delete</button>
      </div>
    `
  })
}
