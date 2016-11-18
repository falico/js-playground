import todosFromServer from '../todosFromServer'
import { ACTIONS } from '../../actions/constants'

describe('todos from server reducer', () => {
  it('should set an initial state', () => {
    expect(
      todosFromServer(undefined, {})
    ).toEqual({
      byId: {},
      listByFilter: {
        all: [],
        active: [],
        completed: []
      }
    })
  })

  it('should receive a list of todos to include them in the "all" todos list', () => {
    expect(
      todosFromServer({
        byId: {},
        listByFilter: {
          all: [],
          active: [],
          completed: []
        }
      }, {
        type: ACTIONS.RECEIVE_TODOS,
        payload: {
          filter: 'all',
          response: [
            {
              id: 1,
              text: 'Write tests',
              completed: false
            }
          ]
        }
      })
    ).toEqual({
      byId: {
        1: {
          id: 1,
          text: 'Write tests',
          completed: false
        }
      },
      listByFilter: {
        all: [1],
        active: [],
        completed: []
      }
    })
  })

  it('should receive a list of todos to include them in the "active" todos list', () => {
    expect(
      todosFromServer({
        byId: {
          1: {
            id: 1,
            text: 'Write tests',
            completed: true
          },
          2: {
            id: 2,
            text: 'Write documentation',
            completed: false
          }
        },
        listByFilter: {
          all: [1, 2],
          active: [],
          completed: []
        }
      }, {
        type: ACTIONS.RECEIVE_TODOS,
        payload: {
          filter: 'active',
          response: [
            {
              id: 2,
              text: 'Write documentation',
              completed: false
            }
          ]
        }
      })
    ).toEqual({
      byId: {
        1: {
          id: 1,
          text: 'Write tests',
          completed: true
        },
        2: {
          id: 2,
          text: 'Write documentation',
          completed: false
        }
      },
      listByFilter: {
        all: [1, 2],
        active: [2],
        completed: []
      }
    })
  })

  it('should receive a list of todos to include them in the "completed" todos list', () => {
    expect(
      todosFromServer({
        byId: {},
        listByFilter: {
          all: [],
          active: [],
          completed: []
        }
      }, {
        type: ACTIONS.RECEIVE_TODOS,
        payload: {
          filter: 'completed',
          response: [
            {
              id: 1,
              text: 'Write tests',
              completed: true
            }
          ]
        }
      })
    ).toEqual({
      byId: {
        1: {
          id: 1,
          text: 'Write tests',
          completed: true
        }
      },
      listByFilter: {
        all: [],
        active: [],
        completed: [1]
      }
    })
  })

})
