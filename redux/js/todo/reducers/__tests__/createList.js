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
      isFetching: false,
      ids: []
    })
  })

  it('should return its current state if the action is not assigned to it', () => {
    expect(
      myList({
        isFetching: true,
        ids: [1]
      }, {
        payload: {
          filter: 'notMyList'
        }
      })
    ).toEqual({
      isFetching: true,
      ids: [1]
    })
  })

  it('should set an isFetching flag on "request todos" action', () => {
    expect(
      myList({
        isFetching: false,
        ids: []
      }, {
        type: ACTIONS.REQUEST_TODOS,
        payload: {
          filter: 'myList'
        }
      })
    ).toEqual({
      isFetching: true,
      ids: []
    })
  })

  it('should unset an isFetching flag on "receive todos" action', () => {
    expect(
      myList({
        isFetching: true,
        ids: []
      }, {
        type: ACTIONS.RECEIVE_TODOS,
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
      isFetching: false,
      ids: [99]
    })
  })

})
