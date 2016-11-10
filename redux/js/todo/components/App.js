import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import RouteVisibleTodoList from '../containers/RouteVisibleTodoList'

const App = ({params}) => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <RouteVisibleTodoList />
    <Footer />
  </div>
)

export default App
