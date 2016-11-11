import todos from '../todos'
import { ACTIONS } from '../../actions/constants'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual({
      byId: {},
      allIds: []
    })
  })

  it('should handle adding a todo', () => {
    expect(
      todos({
        byId: {
          1: {
            id: 1,
            text: 'Write tests',
            completed: false
          }
        },
        allIds: [1]
      }, {
        type: ACTIONS.ADD_TODO,
        payload: {
          id: 2,
          text: 'Write documentation',
          completed: false
        }
      })
    ).toEqual({
      byId: {
        1: {
          id: 1,
          text: 'Write tests',
          completed: false
        },
        2: {
          id: 2,
          text: 'Write documentation',
          completed: false
        }
      },
      allIds: [1, 2]
    })
  })

  it('should handle toggling a todo', () => {
    expect(
      todos({
        byId: {
          0: {
            id: 0,
            text: 'Use Redux',
            completed: false
          },
          1: {
            id: 1,
            text: 'Run the tests',
            completed: false
          }
        },
        allIds: [0, 1]
      }, {
        type: ACTIONS.TOGGLE_TODO,
        payload: {
          id: 1
        }
      })
    ).toEqual({
      byId: {
        0: {
          id: 0,
          text: 'Use Redux',
          completed: false
        },
        1: {
          id: 1,
          text: 'Run the tests',
          completed: true
        }
      },
      allIds: [0, 1]
    })
  })

})
