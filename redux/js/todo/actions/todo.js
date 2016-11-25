import { normalize } from 'normalizr'

import * as api from '../api/index'
import * as schema from './schema'
import { ACTIONS } from './constants'
import { generateUUID } from '../common/utils'
import { getIsFetching } from '../reducers/index'

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

export const setVisibilityFilter = (filter) => ({
    type: ACTIONS.SET_VISIBILITY_FILTER,
    payload: {
      filter
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
 * SERVER ACTIONS: thunks that depend on API calls
 */

 export const serverAddTodo = (text) => (dispatch) =>
   api.addTodo(text).then(todo => {
     dispatch({
       type: ACTIONS.ADD_TODO_SUCCESS,
       payload: normalize(todo, schema.todo)
     })
   },
   error => {
     dispatch({
       type: ACTIONS.ADD_TODO_ERROR,
       payload: {
         message: 'add todo failed'
       }
     })
   });

 export const serverToggleTodo = (id) => (dispatch) =>
   api.toggleTodo(id).then(todo => {
      dispatch({
        type: ACTIONS.TOGGLE_TODO_SUCCESS,
        payload: {
          id
        }
      })
   },
   error => {
     dispatch({
       type: ACTIONS.TOGGLE_TODO_ERROR,
       payload: {
         message: 'toggle todo failed'
       }
     })
   });

/*
 * Multi-action creator: abstraction that represents multiple actions
 * dispatched over a period of time. Returns a function (thunk) that
 * accepts the dispatch function as the callback argument.
 */
export const fetchTodos = (filter) => (dispatch, getState) => {

  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
      type: ACTIONS.FETCH_TODOS_REQUEST,
      payload: {
        filter
      }
    });

  return api.fetchTodos(filter).then(response => {
    dispatch({
        type: ACTIONS.FETCH_TODOS_SUCCESS,
        payload: {
          filter,
          response: normalize(response, schema.array_todo)
        }
      });
  },
  error => {
    dispatch({
      type: ACTIONS.FETCH_TODOS_ERROR,
      payload: {
        filter: filter,
        message: 'fetch todos failed'
      }
    })
  });
}
