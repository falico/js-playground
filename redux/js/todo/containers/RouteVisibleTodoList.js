import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todo'
import { getVisibleTodos } from '../reducers/index'

class RouteVisibleTodoList extends Component {
  componentDidMount() {
    console.table(this.props);
  }
  componentDidUpdate(/* prevProps */) {
    console.table(this.props);
  }
  render() {
    return <TodoList {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => {
  return {
    todos: getVisibleTodos(state, params.filter || 'all')
  }
}

RouteVisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(RouteVisibleTodoList))

export default RouteVisibleTodoList
