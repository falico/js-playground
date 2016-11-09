import { createStore } from 'redux'
import debounce from 'lodash/debounce'
import todoApp from '../reducers/index'
import { load as loadState } from './state'

export const configure = (opts = {}) => {
  const initialState = loadState();
  const subscriptions = opts.subscriptions || [];

  let store = createStore(todoApp, initialState);

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
