import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';

import * as actions from '../actions/todo'
import TodoList from '../components/TodoList'
import FetchTodosError from '../components/errors/FetchTodosError'
import { getVisibleServerTodos, getIsFetching, getFetchError } from '../reducers/index'

class RouteVisibleTodoList extends Component {
  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
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
    const { serverToggleTodo, todos, errorMessage, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading ...</p>
    }
    if (errorMessage && !todos.length) {
      return <FetchTodosError
              message={errorMessage}
              onRetry={() => this.fetchData()} />
    }
    return <TodoList
            todos={todos}
            onTodoClick={serverToggleTodo}
            />
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleServerTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getFetchError(state, filter),
    filter
  }
}

RouteVisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(RouteVisibleTodoList))

export default RouteVisibleTodoList
