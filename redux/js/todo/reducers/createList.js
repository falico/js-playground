import { ACTIONS } from '../actions/constants'

const createList = (filter) => {
  return (state = [], action) => {
    if (action.payload && action.payload.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case ACTIONS.RECEIVE_TODOS:
        return action.payload.response.map(todo => todo.id)
      default:
        return state;
    }
  }
}

export default createList;

export const getIds = (state) => state;
