import createList from '../createList'
import { ACTIONS } from '../../actions/constants'

describe('createList reducer', () => {

  var myList;

  beforeEach(() => {
    myList = createList('myList');
  })

  it('should set an initial state when it receives an action that is assigned to it', () => {
    expect(
      myList(undefined, {
        payload: {
          filter: 'myList'
        }
      })
    ).toEqual({
      errorMessage: null,
      isFetching: false,
      ids: []
    })
  })

  it('should return its current state if the action is not assigned to it', () => {
    expect(
      myList({
        errorMessage: 'Test error message',
        isFetching: true,
        ids: [1]
      }, {
        payload: {
          filter: 'notMyList'
        }
      })
    ).toEqual({
      errorMessage: 'Test error message',
      isFetching: true,
      ids: [1]
    })
  })

  it('should set an isFetching flag on "request todos" action', () => {
    expect(
      myList({
        errorMessage: null,
        isFetching: false,
        ids: []
      }, {
        type: ACTIONS.FETCH_TODOS_REQUEST,
        payload: {
          filter: 'myList'
        }
      })
    ).toEqual({
      errorMessage: null,
      isFetching: true,
      ids: []
    })
  })

  it('should unset an isFetching flag on "receive todos" action', () => {
    expect(
      myList({
        errorMessage: null,
        isFetching: true,
        ids: []
      }, {
        type: ACTIONS.FETCH_TODOS_SUCCESS,
        payload: {
          filter: 'myList',
          response: [
            {
              id: 99
            }
          ]
        }
      })
    ).toEqual({
      errorMessage: null,
      isFetching: false,
      ids: [99]
    })
  })

  it('should add a todo on "add todo" action', () => {
    expect(
      myList({
        errorMessage: null,
        isFetching: false,
        ids: [1, 2]
      }, {
        type: ACTIONS.ADD_TODO_SUCCESS,
        payload: {
          id: 5
        }
      })
    ).toEqual({
      errorMessage: null,
      isFetching: false,
      ids: [1, 2, 5]
    })
  })

  it('should set an error and unset the isFetching flag on "fetch error" action', () => {
    expect(
      myList({
        errorMessage: null,
        isFetching: true,
        ids: []
      }, {
        type: ACTIONS.FETCH_TODOS_ERROR,
        payload: {
          filter: 'myList',
          message: 'Error on fetch'
        }
      })
    ).toEqual({
      errorMessage: 'Error on fetch',
      isFetching: false,
      ids: []
    })
  })

})
