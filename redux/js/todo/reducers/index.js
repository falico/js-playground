import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos, * as todosSelectors from './todos'
import { ACTIONS, VisibilityFilters } from '../actions/constants'

export const getVisibleTodos = (state, filter) => {
  return todosSelectors.getVisibleTodos(state.todos, filter)
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
