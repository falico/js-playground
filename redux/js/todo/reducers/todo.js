import { combineReducers } from 'redux'
import { ACTIONS, VisibilityFilters } from '../actions/constants'

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case ACTIONS.SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

function todos(state = {}, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        [action.payload.id] : action.payload
      }
    case ACTIONS.TOGGLE_TODO:
      let id = action.payload.id;
      return {
        ...state,
        [id]: {
          ...state[id],
          completed: !state[id].completed
        }
      }
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
