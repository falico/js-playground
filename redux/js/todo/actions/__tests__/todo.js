import { ACTIONS } from '../constants'
import * as actions from '../todo'

describe('todo actions', () => {
  it('should create an "add todo" action', () => {
    let addAction = actions.addTodo('Use Redux');
    expect(addAction).toEqual({
      type: ACTIONS.ADD_TODO,
      payload: {
        id: addAction.payload.id,
        text: 'Use Redux',
        completed: false
      }
    })
  })

  it('should create a "set visibility filter" action', () => {
    expect(actions.setVisibilityFilter('filter text')).toEqual({
      type: ACTIONS.SET_VISIBILITY_FILTER,
      payload: {
        filter: 'filter text'
      }
    })
  })

  it('should create a "toggle todo" action', () => {
    expect(actions.toggleTodo(101)).toEqual({
      type: ACTIONS.TOGGLE_TODO,
      payload: {
        id: 101
      }
    })
  })

  it('should create a "receive todos" action', () => {
    expect(actions.receiveTodos('filter value', [])).toEqual({
      type: ACTIONS.RECEIVE_TODOS,
      payload: {
        filter: 'filter value',
        response: []
      }
    })
  })
})
