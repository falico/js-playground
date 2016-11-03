import { ACTIONS } from './constants'

let todoId = 1;

export const addTodo = (text) => {
  return {
    type: ACTIONS.ADD_TODO,
    payload: {
      id: todoId++,
      text,
      completed: false
    }
  }
}

export const removeTodo = (text) => {
  return {
    type: ACTIONS.REMOVE_TODO,
    payload: {
      text
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: ACTIONS.TOGGLE_TODO,
    payload: {
      id
    }
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: ACTIONS.SET_VISIBILITY_FILTER,
    payload: {
      filter
    }
  }
}
