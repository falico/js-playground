import { ACTIONS } from '../actions/constants'

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
