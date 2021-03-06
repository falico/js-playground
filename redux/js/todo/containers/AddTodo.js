import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo'

let AddTodo = ({ dispatch }) => {
  let input

  function submitForm(e) {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
