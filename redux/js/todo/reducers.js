import { combineReducers } from 'redux'
import { ACTIONS, VisibilityFilters } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: {}
}

let todoId = 1;

function createTodo(text) {
  return {
    id: todoId++,
    text,
    completed: false
  }
}

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
      let todo = createTodo(action.payload.text);
      return {
        ...state,
        [todo.id] : todo
      }
    case ACTIONS.TOGGLE_TODO:
      let id = action.payload.id;
      return {
        ...state,
        [id]: {
          ...(state[id]),
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
