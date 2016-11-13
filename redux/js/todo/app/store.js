import { createStore } from 'redux'
import debounce from 'lodash/debounce'
import todoApp from '../reducers/index'
import { load as loadState } from './state'

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
}

export const configure = (opts = {}) => {
  const initialState = loadState();
  const subscriptions = opts.subscriptions || [];

  let store = createStore(todoApp, initialState);

  if (__DEV__) {
    store.dispatch = addLoggingToDispatch(store);
  }

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
