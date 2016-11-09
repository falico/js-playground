import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import * as Store from './app/store'
import { save as saveState } from './app/state'

let subscriptions = [{
  delay: 600,
  fn() {
    saveState({
      todos: store.getState().todos
    })
  }
}]

let store = Store.configure({
  subscriptions
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
