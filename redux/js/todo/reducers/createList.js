import { combineReducers } from 'redux'
import { ACTIONS } from '../actions/constants'

const createList = (filter) => {

  const ids = (state = [], action) => {
    switch (action.type) {
      case ACTIONS.FETCH_TODOS_SUCCESS:
        return (action.payload && action.payload.filter === filter) ?
          action.payload.response.map(todo => todo.id) :
          state;
      case ACTIONS.ADD_TODO_SUCCESS:
        return (filter !== 'completed') ?
          [...state, action.payload.id] :
          state;
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) => {
    if (action.payload && action.payload.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case ACTIONS.FETCH_TODOS_REQUEST:
        return true;
      case ACTIONS.FETCH_TODOS_ERROR:
      case ACTIONS.FETCH_TODOS_SUCCESS:
        return false;
      default:
        return state;
    }
  }

  const errorMessage = (state = null, action) => {
    if (action.payload && action.payload.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case ACTIONS.FETCH_TODOS_ERROR:
        return action.payload.message || 'createList: unexpected error on "ACTIONS.FETCH_TODOS_ERROR"';
      case ACTIONS.FETCH_TODOS_SUCCESS:
        return null;
      default:
        return state;
    }
  }

  return combineReducers({
    errorMessage,
    isFetching,
    ids
  })
}

export default createList;

export const getIds = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;

export const getFetchError = (state) => state.errorMessage;
