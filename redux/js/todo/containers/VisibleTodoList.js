import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todo'
import { VisibilityFilters } from '../actions/constants'

const getVisibleTodos = (todos, filter) => {
  let result = {};

  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      for (let id in todos) {
        if (todos[id].completed) {
          result[id] = todos[id];
        }
      }
      return result;
    case VisibilityFilters.SHOW_ACTIVE:
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

const VisibleTodoList = connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList)

export default VisibleTodoList
