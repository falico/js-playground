import { combineReducers } from 'redux'
import { ACTIONS } from '../actions/constants'

const createList = (filter) => {

  const ids = (state = [], action) => {
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

  const isFetching = (state = false, action) => {
    if (action.payload && action.payload.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case ACTIONS.REQUEST_TODOS:
        return true;
      case ACTIONS.RECEIVE_TODOS:
        return false;
      default:
        return state;
    }
  }

  return combineReducers({
    isFetching,
    ids
  })
}

export default createList;

export const getIds = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;
