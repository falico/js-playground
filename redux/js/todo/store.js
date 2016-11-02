import { createStore } from 'redux'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import todoApp from './reducers'
let store = createStore(todoApp)
