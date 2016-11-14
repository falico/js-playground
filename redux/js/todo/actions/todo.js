import { ACTIONS } from './constants'
import { generateUUID } from '../common/utils'

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


export const setVisibilityFilter = (filter) => ({
    type: ACTIONS.SET_VISIBILITY_FILTER,
    payload: {
      filter
    }
  })
