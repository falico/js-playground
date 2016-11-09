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

  it('should allow delayed subscriptions to run after each state update', () => {
    jest.useRealTimers()

    let mockFn = jest.fn();
    let store = Store.configure({
      subscriptions: [{
        fn: mockFn,
        delay: 0
      }]
    });

    let stateUpdates = new Promise((resolve, reject) => {
      store.dispatch(addTodo('todo 1'))
      store.dispatch(addTodo('todo 2'))
      store.dispatch(addTodo('todo 3'))

      setTimeout(() => {
        resolve();
      }, 1)

    });

    return stateUpdates.then(() => {
      expect(Object.keys(store.getState().todos).length).toEqual(3);
      expect(mockFn).toHaveBeenCalledTimes(1);
    })
  });

})
