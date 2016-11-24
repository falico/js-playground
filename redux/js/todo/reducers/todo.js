import { ACTIONS } from '../actions/constants'

const todo = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
    case ACTIONS.ADD_TODO_SUCCESS:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
    case ACTIONS.TOGGLE_TODO:
    case ACTIONS.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export default todo;
