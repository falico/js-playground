import { combineReducers } from 'redux'
import { ACTIONS, VisibilityFilters } from '../actions/constants'
import todo from './todo'

/*
 * ----- SELECTORS
 */
const getAllTodos = (state) => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  var allTodos = getAllTodos(state);

  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
    case 'all':
      return allTodos;
    case VisibilityFilters.SHOW_COMPLETED:
    case 'completed':
      return allTodos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
    case 'active':
      return allTodos.filter(t => !t.completed);
    default:
      console.warn('Unknown filter: ' + filter);
      return allTodos;
  }
}

/*
 * ----- REDUCERS
 */
const byId = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        [action.payload.id] : todo(state[action.payload.id], action)
      }
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload.id];
    default:
      return state;
  }
}

const todos = combineReducers({
  byId,
  allIds
});

export default todos
