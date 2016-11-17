import { createStore, applyMiddleware } from 'redux'
import debounce from 'lodash/debounce'
import todoApp from '../reducers/index'
import { load as loadState } from './state'
import promiseSupport from 'redux-promise';
import createLogger from 'redux-logger';

/*
 * Replace store.dispatch with a function that logs all actions passed to
 * store.dispatch before calling the original store.dispatch function
 *
 * Function was commented out because it is being replaced
 * with third-party module: redux-logger
 */
// const logger = (store) => (next) => {
//
//   if (!console.group) {
//     return next;
//   }
//
//   return (action) => {
//     console.group(action.type);
//     console.log('%c prev state', 'color: gray', store.getState());
//     console.log('%c action', 'color: blue', action);
//     const returnValue = next(action);
//     console.log('%c next state', 'color: green', store.getState());
//     console.groupEnd(action.type);
//     return returnValue;
//   };
// }

/*
 * Replace store.dispatch with a function that accepts an action object or
 * a promise that will resolve to an action object
 *
 * Function was commented out because it is being replaced
 * with third-party module: redux-promise
 */
// const promiseSupport = (store) => (next) => (action) => {
//   if (typeof action.then === 'function') {
//     return action.then(next);
//   }
//   return next(action);
// }

/*
 * Using appyMiddleware from redux instead
 */
// const wrapDispatchWithMiddlewares = (store, middlewares) => {
//   middlewares.slice().reverse().forEach(middleware =>
//     store.dispatch = middleware(store)(store.dispatch)
//   )
// }

export const configure = (opts = {}) => {
  const initialState = loadState();
  const subscriptions = opts.subscriptions || [];
  const middlewares = [ promiseSupport ];

  if (__DEV__) {
    middlewares.push(createLogger());
  }

  const store = createStore(todoApp, initialState, applyMiddleware(...middlewares));

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
