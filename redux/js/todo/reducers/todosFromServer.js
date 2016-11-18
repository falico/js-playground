import { combineReducers } from 'redux'
import { ACTIONS } from '../actions/constants'

/*
 * ----- SELECTORS
 */
export const getVisibleServerTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
}

/*
 * ----- REDUCERS
 */
const byId = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_TODOS:
      const nextState = { ...state };
      action.payload.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  if (action.payload && action.payload.filter !== 'all') {
    return state;
  }
  switch (action.type) {
    case ACTIONS.RECEIVE_TODOS:
      return action.payload.response.map(todo => todo.id)
    default:
      return state;
  }
}

const activeIds = (state = [], action) => {
  if (action.payload && action.payload.filter !== 'active') {
    return state;
  }
  switch (action.type) {
    case ACTIONS.RECEIVE_TODOS:
      return action.payload.response.map(todo => todo.id)
    default:
      return state;
  }
}

const completedIds = (state = [], action) => {
  if (action.payload && action.payload.filter !== 'completed') {
    return state;
  }
  switch (action.type) {
    case ACTIONS.RECEIVE_TODOS:
      return action.payload.response.map(todo => todo.id)
    default:
      return state;
  }
}

const idsByFilter = combineReducers({
  'all': allIds,
  'active': activeIds,
  'completed': completedIds,
})

const todosFromServer = combineReducers({
  byId,
  idsByFilter
});

export default todosFromServer
