import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList'
import * as actions from '../actions/todo'
import { getVisibleServerTodos, getIsFetching } from '../reducers/index'

class RouteVisibleTodoList extends Component {
  fetchData() {
    const { filter, requestTodos, fetchTodos } = this.props;
    requestTodos(filter);
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
    const { toggleTodo, todos, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading ...</p>
    }
    return <TodoList
            todos={todos}
            onTodoClick={toggleTodo}
            />
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleServerTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
}

RouteVisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(RouteVisibleTodoList))

export default RouteVisibleTodoList
