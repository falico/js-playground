import { ACTIONS } from '../actions/constants'

const byId = (state = {}, action) => {
  if (action.payload && action.payload.response) {
    return {
      ...state,
      ...action.payload.response.entities.todos
    }
  }
  return state;
}

export default byId;

export const getTodo = (state, id) => state[id];
