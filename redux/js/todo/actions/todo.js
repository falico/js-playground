import { ACTIONS } from './constants'
import { generateUUID } from '../common/utils'
import * as api from '../api/index'
import { getIsFetching } from '../reducers/index';

const requestTodos = (filter) => ({
    type: ACTIONS.REQUEST_TODOS,
    payload: {
      filter
    }
  })

export const addTodo = (text) => ({
    type: ACTIONS.ADD_TODO,
    payload: {
      id: generateUUID(),
      text,
      completed: false
    }
  })

export const removeTodo = (text) => ({
    type: ACTIONS.REMOVE_TODO,
    payload: {
      text
    }
  })

export const toggleTodo = (id) => ({
    type: ACTIONS.TOGGLE_TODO,
    payload: {
      id
    }
  })

export const receiveTodos = (filter, response) => ({
    type: ACTIONS.RECEIVE_TODOS,
    payload: {
      filter,
      response
    }
  })

/*
 * Asynchronous action creator: returns a promise that resolves to an action
 */
// export const fetchTodos = (filter) =>
//   api.fetchTodos(filter).then(response =>
//     receiveTodos(filter, response)
//   );

/*
 * Multi-action creator: abstraction that represents multiple actions
 * dispatched over a period of time. Returns a function (thunk) that
 * accepts the dispatch function as the callback argument.
 */
export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));

  return api.fetchTodos(filter).then(response => {
    dispatch(receiveTodos(filter, response));
  });
}


export const setVisibilityFilter = (filter) => ({
    type: ACTIONS.SET_VISIBILITY_FILTER,
    payload: {
      filter
    }
  })
