import React from 'react'
import { connect } from 'react-redux'
import { serverAddTodo } from '../actions/todo'

let AddTodoServer = ({ dispatch }) => {
  let input;

  function submitForm(e) {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(serverAddTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo (Server)
        </button>
      </form>
    </div>
  )
}
AddTodoServer = connect()(AddTodoServer)

export default AddTodoServer
