import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todo'

const getVisibleTodos = (todos, filter) => {
  let result = {};

  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      for (let id in todos) {
        if (todos[id].completed) {
          result[id] = todos[id];
        }
      }
      return result;
    case 'active':
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

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const RouteVisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default RouteVisibleTodoList
