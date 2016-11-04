import { ACTIONS } from '../constants'
import * as actions from '../todo'

describe('todo actions', () => {
  it('addTodo should create "add todo" action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: ACTIONS.ADD_TODO,
      payload: {
        id: 1,
        text: 'Use Redux',
        completed: false
      }
    })
  })

  it('setVisibilityFilter should create "set visibility filter" action', () => {
    expect(actions.setVisibilityFilter('filter text')).toEqual({
      type: ACTIONS.SET_VISIBILITY_FILTER,
      payload: {
        filter: 'filter text'
      }
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(101)).toEqual({
      type: ACTIONS.TOGGLE_TODO,
      payload: {
        id: 101
      }
    })
  })
})
