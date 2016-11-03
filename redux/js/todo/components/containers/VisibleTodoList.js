import { connect } from 'react-redux'
import TodoList from '../presentational/TodoList'
import { toggleTodo } from '../../actions'

const getVisibleTodos = (todos, filter) => {
  let result = {};

  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      for (let id in todos) {
        if (todos[id].completed) {
          result[id] = todos[id];
        }
      }
      return result;
    case 'SHOW_ACTIVE':
      for (let id in todos) {
        if (!todos[id].completed) {
          result[id] = todos[id];
        }
      }
      return result;
    default:
      console.warn('Unknown filter: ' + filter);
      return todos;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
