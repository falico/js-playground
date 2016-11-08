import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/index'
import App from './components/App'
import * as State from './utils/state'

const initialState = State.load();
let store = createStore(todoApp, initialState);

store.subscribe(() => {
  let state = store.getState();
  State.save({
    todos: state.todos
  })
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
