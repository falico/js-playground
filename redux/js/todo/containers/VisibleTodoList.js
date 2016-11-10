import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todo'
import { VisibilityFilters } from '../actions/constants'
import { getVisibleTodos } from '../reducers/index'

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state, state.visibilityFilter)
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList)

export default VisibleTodoList
