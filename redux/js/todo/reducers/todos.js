import { ACTIONS, VisibilityFilters } from '../actions/constants'

export const getVisibleTodos = (state, filter) => {
  let result = {};

  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
    case 'all':
      return state
    case VisibilityFilters.SHOW_COMPLETED:
    case 'completed':
      for (let id in state) {
        if (state[id].completed) {
          result[id] = state[id];
        }
      }
      return result;
    case VisibilityFilters.SHOW_ACTIVE:
    case 'active':
      for (let id in state) {
        if (!state[id].completed) {
          result[id] = state[id];
        }
      }
      return result;
    default:
      console.warn('Unknown filter: ' + filter);
      return state;
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

export default todos
