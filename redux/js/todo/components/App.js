import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddTodoServer from '../containers/AddTodoServer'
import VisibleTodoList from '../containers/VisibleTodoList'
import RouteVisibleTodoList from '../containers/RouteVisibleTodoList'

const App = ({params}) => (
  <div>
    <AddTodo />
    <AddTodoServer />
    <VisibleTodoList />
    <RouteVisibleTodoList />
    <Footer />
  </div>
)

export default App
