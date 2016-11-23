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
    expect(actions.setVisibilityFilter('filter value')).toEqual({
      type: ACTIONS.SET_VISIBILITY_FILTER,
      payload: {
        filter: 'filter value'
      }
    })
  })

  it('should create an async action creator "fetchTodos" that emits two actions if it is not already fetching todos', () => {
    const dispatchMock = jest.fn();
    const getState = jest.fn(() => (
      {
        todosFromServer: {
          listByFilter: {
            completed: {
              isFetching: false
            }
          }
        }
      }
    ));

    return actions.fetchTodos('completed')(dispatchMock, getState).then(response => {
      // First action
      expect(dispatchMock.mock.calls[0][0].type).toEqual(ACTIONS.REQUEST_TODOS);
      expect(dispatchMock.mock.calls[0][0].payload).toEqual({
        filter: 'completed'
      });

      // Second action (after async operation)
      expect(dispatchMock.mock.calls[1][0].type).toEqual(ACTIONS.RECEIVE_TODOS);
      expect(dispatchMock.mock.calls[1][0].payload).toEqual({
        filter: 'completed',
        response: [{
          id: 1,
          text: 'Pick oranges',
          completed: false
        },
        {
          id: 2,
          text: 'Read the news',
          completed: true
        }]
      });
    })
  })

  it('should create an async action creator "fetchTodos" that emits no actions if it is already fetching todos', () => {
    const dispatchMock = jest.fn();
    const getState = jest.fn(() => (
      {
        todosFromServer: {
          listByFilter: {
            completed: {
              isFetching: true
            }
          }
        }
      }
    ));

    return actions.fetchTodos('completed')(dispatchMock, getState).then(response => {
      // No dispatch calls should have been made
      expect(dispatchMock.mock.calls).toEqual([]);
    })
  })
})
