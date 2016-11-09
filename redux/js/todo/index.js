import React from 'react'
import { render } from 'react-dom'
import * as Store from './app/store'
import { save as saveState } from './app/state'
import Root from './components/Root'

let subscriptions = [{
  delay: 600,  // debouce for a specific number of milliseconds before the function is called
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
  <Root store={store} />,
  document.getElementById('app')
)
