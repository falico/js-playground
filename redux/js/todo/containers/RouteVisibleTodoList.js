import { connect } from 'react-redux'
import { withRouter } from 'react-router';
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

const mapStateToProps = (state, { params }) => {
  return {
    todos: getVisibleTodos(state.todos, params.filter || 'all')
  }
}

const RouteVisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList))

export default RouteVisibleTodoList
