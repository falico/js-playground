import { ACTIONS } from '../actions/constants'

const todo = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export default todo;
