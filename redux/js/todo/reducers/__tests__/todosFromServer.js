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
          errorMessage: null,
          isFetching: false,
          ids: []
        },
        active: {
          errorMessage: null,
          isFetching: false,
          ids: []
        },
        completed: {
          errorMessage: null,
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
            errorMessage: null,
            isFetching: true,
            ids: []
          },
          active: {
            errorMessage: null,
            isFetching: false,
            ids: []
          },
          completed: {
            errorMessage: null,
            isFetching: false,
            ids: []
          }
        }
      }, {
        type: ACTIONS.FETCH_TODOS_SUCCESS,
        payload: {
          filter: 'all',
          response: {
            entities: {
              todos: {
                1: {
                  id: 1,
                  text: 'Write tests',
                  completed: false
                }
              }
            },
            result: [1]
          }
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
          errorMessage: null,
          isFetching: false,
          ids: [1]
        },
        active: {
          errorMessage: null,
          isFetching: false,
          ids: []
        },
        completed: {
          errorMessage: null,
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
            errorMessage: null,
            isFetching: false,
            ids: [1, 2]
          },
          active: {
            errorMessage: null,
            isFetching: true,
            ids: []
          },
          completed: {
            errorMessage: null,
            isFetching: false,
            ids: []
          }
        }
      }, {
        type: ACTIONS.FETCH_TODOS_SUCCESS,
        payload: {
          filter: 'active',
          response: {
            entities: {
              todos: {
                2: {
                  id: 2,
                  text: 'Write documentation',
                  completed: false
                }
              }
            },
            result: [2]
          }
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
          errorMessage: null,
          isFetching: false,
          ids: [1, 2]
        },
        active: {
          errorMessage: null,
          isFetching: false,
          ids: [2]
        },
        completed: {
          errorMessage: null,
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
            errorMessage: null,
            isFetching: true,
            ids: []
          },
          active: {
            errorMessage: null,
            isFetching: false,
            ids: []
          },
          completed: {
            errorMessage: null,
            isFetching: true,
            ids: []
          }
        }
      }, {
        type: ACTIONS.FETCH_TODOS_SUCCESS,
        payload: {
          filter: 'completed',
          response: {
            entities: {
              todos: {
                1: {
                  id: 1,
                  text: 'Write tests',
                  completed: true
                }
              }
            },
            result: [1]
          }
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
          errorMessage: null,
          isFetching: true,
          ids: []
        },
        active: {
          errorMessage: null,
          isFetching: false,
          ids: []
        },
        completed: {
          errorMessage: null,
          isFetching: false,
          ids: [1]
        }
      }
    })
  })

})
