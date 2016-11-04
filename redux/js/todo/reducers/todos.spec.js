import todos from './todos'
import { ACTIONS } from '../actions/constants'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual({})
  })

  it('should handle adding a todo', () => {
    expect(
      todos({}, {
        type: ACTIONS.ADD_TODO,
        payload: {
          id: 0,
          text: 'Run the tests',
          completed: false
        }
      })
    ).toEqual({
      0: {
        id: 0,
        text: 'Run the tests',
        completed: false
      }
    })

    expect(
      todos({
        0: {
          id: 0,
          text: 'Run the tests',
          completed: false
        }
      }, {
        type: ACTIONS.ADD_TODO,
        payload: {
          id: 1,
          text: 'Use Redux',
          completed: true
        }

      })
    ).toEqual({
      0: {
        id: 0,
        text: 'Run the tests',
        completed: false,
      },
      1: {
        id: 1,
        text: 'Use Redux',
        completed: true
      }
    })

    expect(
      todos({
        0: {
          id: 0,
          text: 'Run the tests',
          completed: false
        },
        1: {
          id: 1,
          text: 'Use Redux',
          completed: true
        }
      }, {
        type: ACTIONS.ADD_TODO,
        payload: {
          id: 2,
          text: 'Fix the tests'
        }
      })
    ).toEqual({
      0: {
        id: 0,
        text: 'Run the tests',
        completed: false
      },
      1: {
        id: 1,
        text: 'Use Redux',
        completed: true
      },
      2: {
        id: 2,
        text: 'Fix the tests'
      }
    })
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos({
        1: {
          id: 1,
          text: 'Run the tests',
          completed: false
        },
        0: {
          id: 0,
          text: 'Use Redux',
          completed: false
        }
      }, {
        type: ACTIONS.TOGGLE_TODO,
        payload: {
          id: 1
        }
      })
    ).toEqual({
      1: {
        id: 1,
        text: 'Run the tests',
        completed: true
      },
      0: {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    })
  })

})
