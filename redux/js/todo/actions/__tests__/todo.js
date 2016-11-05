import { ACTIONS } from '../constants'
import * as actions from '../todo'

describe('todo actions', () => {
  it('should create an "add todo" action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: ACTIONS.ADD_TODO,
      payload: {
        id: 1,
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
})
