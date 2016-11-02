export const ACTIONS = {
   ADD_TODO: 'ADD_TODO'
   REMOVE_TODO: 'REMOVE_TODO'
   TOGGLE_TODO: 'TOGGLE_TODO'
   SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = (text) => {
  type: ACTIONS.ADD_TODO,
  payload: {
    text
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
    type: ACTIONS.TOGGLE_TODO,
    payload: {
      filter
    }
  }
}
