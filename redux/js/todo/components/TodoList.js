import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {Object.keys(todos).map(id =>
      <Todo
        key={id}
        {...todos[id]}
        onClick={() => onTodoClick(id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.shape({
    id: PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  }),
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
