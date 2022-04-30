import Database from './Database.js'
const $form = document.getElementById('form')
const $title = document.getElementById('titleField')
const $description = document.getElementById('descriptionField')
const { alert } = window

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
}

const saveTodo = (todosObject) => {
  return database.addTodos(todosObject)
}

$form.addEventListener('submit', function (e) {
  e.preventDefault()
  handleSubmit($title.value, $description.value)
})
