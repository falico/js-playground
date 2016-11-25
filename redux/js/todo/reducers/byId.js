import { ACTIONS } from '../actions/constants'

const byId = (state = {}, action) => {
  if (action.type === ACTIONS.FETCH_TODOS_SUCCESS ||
      action.type === ACTIONS.ADD_TODO_SUCCESS) {
    return {
      ...state,
      ...action.payload.response.entities.todos
    }
  }
  return state;
}

export default byId;

export const getTodo = (state, id) => state[id];
