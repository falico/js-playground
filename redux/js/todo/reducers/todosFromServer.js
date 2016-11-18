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
