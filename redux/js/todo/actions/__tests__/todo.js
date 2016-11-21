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

  it('should create an asynchronous action creator "fetchTodos" that emits two actions', () => {
    const dispatchMock = jest.fn();
    return actions.fetchTodos('filter value')(dispatchMock).then(response => {
      // First action
      expect(dispatchMock.mock.calls[0][0].type).toEqual(ACTIONS.REQUEST_TODOS);
      expect(dispatchMock.mock.calls[0][0].payload).toEqual({
        filter: 'filter value'
      });

      // Second action (after async operation)
      expect(dispatchMock.mock.calls[1][0].type).toEqual(ACTIONS.RECEIVE_TODOS);
      expect(dispatchMock.mock.calls[1][0].payload).toEqual({
        filter: 'filter value',
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
})
