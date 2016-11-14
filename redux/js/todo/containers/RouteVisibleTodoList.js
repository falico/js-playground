import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList'
import * as actions from '../actions/todo'
import { getVisibleTodos } from '../reducers/index'
import { fetchTodos } from '../api/index'

class RouteVisibleTodoList extends Component {
  fetchData() {
    const { filter, receiveTodos } = this.props;
    fetchTodos(filter).then(todos => {
      receiveTodos(filter, todos);
    })
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }
  render() {
    const { toggleTodo, ...rest } = this.props;
    return <TodoList
            {...rest}
            onTodoClick={toggleTodo}
            />
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

RouteVisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(RouteVisibleTodoList))

export default RouteVisibleTodoList
