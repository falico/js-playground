import * as Store from '../store'
import { VisibilityFilters } from '../../actions/constants'
import { addTodo } from '../../actions/todo'
import localStorageMock from '../../__mocks__/localStorage'

describe('App Store', () => {

  beforeEach(() => {
    window.localStorage = localStorageMock;
  })

  afterEach(() => {
    localStorage && localStorage.clear();
  })

  it('should return a store with the initial default state for the app', () => {
    let store = Store.configure();
    expect(store.getState()).toEqual({
      todos: {},
      visibilityFilter: VisibilityFilters.SHOW_ALL
    })
  })

  it('should allow delayed subscriptions to run after each state update', (async) => {
    jest.useFakeTimers();

    let mockFn = jest.fn();
    let store = Store.configure({
      subscriptions: [{
        fn: mockFn,
        delay: 0
      }]
    });
    let stateUpdates = new Promise((resolve, reject) => {
      setTimeout(() => {
        store.dispatch(addTodo('todo 1'))
        store.dispatch(addTodo('todo 2'))
        store.dispatch(addTodo('todo 3'))
        resolve()
      }, 2)
    });

    return stateUpdates.then(() => {
      // The subscription function will be called once though the state
      // was updated on three different occasions
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(Object.keys(store.getState().todos).length).toEqual(3);
    })
  })

})
