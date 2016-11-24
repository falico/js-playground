import { combineReducers } from 'redux'
import { ACTIONS } from '../actions/constants'
import byId, * as fromById from './byId'
import createList, * as fromCreateList from './createList'

/*
 * ----- SELECTORS
 */
export const getVisibleServerTodos = (state, filter) => {
  const ids = fromCreateList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
}

export const getIsFetching = (state, filter) => {
  return fromCreateList.getIsFetching(state.listByFilter[filter]);
}

export const getFetchError = (state, filter) => {
  return fromCreateList.getFetchError(state.listByFilter[filter]);
}

/*
 * ----- REDUCERS
 */

const listByFilter = combineReducers({
  'all': createList('all'),
  'active': createList('active'),
  'completed': createList('completed')
})

const todosFromServer = combineReducers({
  byId,
  listByFilter
});

export default todosFromServer
