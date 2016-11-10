import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todo'
import { getVisibleTodos } from '../reducers/index'

const mapStateToProps = (state, { params }) => {
  return {
    todos: getVisibleTodos(state, params.filter || 'all')
  }
}

const RouteVisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList))

export default RouteVisibleTodoList
