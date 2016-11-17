import { createStore } from 'redux'
import debounce from 'lodash/debounce'
import todoApp from '../reducers/index'
import { load as loadState } from './state'

/*
 * Replace store.dispatch with a function that logs all actions passed to
 * store.dispatch before calling the original store.dispatch function
 */
const logger = (store) => (next) => {

  if (!console.group) {
    return next;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = next(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
}

/*
 * Replace store.dispatch with a function that accepts an action object or
 * a promise that will resolve to an action object
 */
const promiseSupport = (store) => (next) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  return next(action);
}

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware =>
    store.dispatch = middleware(store)(store.dispatch)
  )
}

export const configure = (opts = {}) => {
  const initialState = loadState();
  const subscriptions = opts.subscriptions || [];
  const middlewares = [ promiseSupport ];

  let store = createStore(todoApp, initialState);

  if (__DEV__) {
    middlewares.push(logger);
  }

  wrapDispatchWithMiddlewares(store, middlewares);

  while(subscriptions.length) {
    let subscription = subscriptions.pop();

    if (typeof(subscription.fn) === 'function') {
      let delay = subscription.delay || 0;

      store.subscribe(debounce(() => {
        subscription.fn()
      }, delay));

    } else {
      console.warn('Subscription function is not a function')
    }
  }

  return store
}
