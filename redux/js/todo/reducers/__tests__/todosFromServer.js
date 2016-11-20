import todosFromServer from '../todosFromServer'
import { ACTIONS } from '../../actions/constants'

describe('todos from server reducer', () => {
  it('should set an initial state', () => {
    expect(
      todosFromServer(undefined, {})
    ).toEqual({
      byId: {},
      listByFilter: {
        all: {
          isFetching: false,
          ids: []
        },
        active: {
          isFetching: false,
          ids: []
        },
        completed: {
          isFetching: false,
          ids: []
        }
      }
    })
  })

  it('should receive a list of todos to include them in the "all" todos list', () => {
    expect(
      todosFromServer({
        byId: {},
        listByFilter: {
          all: {
            isFetching: true,
            ids: []
          },
          active: {
            isFetching: false,
            ids: []
          },
          completed: {
            isFetching: false,
            ids: []
          }
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
        all: {
          isFetching: false,
          ids: [1]
        },
        active: {
          isFetching: false,
          ids: []
        },
        completed: {
          isFetching: false,
          ids: []
        }
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
          all: {
            isFetching: false,
            ids: [1, 2]
          },
          active: {
            isFetching: true,
            ids: []
          },
          completed: {
            isFetching: false,
            ids: []
          }
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
        all: {
          isFetching: false,
          ids: [1, 2]
        },
        active: {
          isFetching: false,
          ids: [2]
        },
        completed: {
          isFetching: false,
          ids: []
        }
      }
    })
  })

  it('should receive a list of todos to include them in the "completed" todos list', () => {
    expect(
      todosFromServer({
        byId: {},
        listByFilter: {
          all: {
            isFetching: true,
            ids: []
          },
          active: {
            isFetching: false,
            ids: []
          },
          completed: {
            isFetching: true,
            ids: []
          }
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
        all: {
          isFetching: true,
          ids: []
        },
        active: {
          isFetching: false,
          ids: []
        },
        completed: {
          isFetching: false,
          ids: [1]
        }
      }
    })
  })

})
