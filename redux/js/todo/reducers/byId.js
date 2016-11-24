import { ACTIONS } from '../actions/constants'

const byId = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_TODOS_SUCCESS:
      const nextState = { ...state };
      action.payload.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
}

export default byId;

export const getTodo = (state, id) => state[id];
