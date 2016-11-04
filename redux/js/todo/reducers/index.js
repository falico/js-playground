import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'
import { ACTIONS, VisibilityFilters } from '../actions/constants'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
