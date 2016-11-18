import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList'
import * as actions from '../actions/todo'
import { getVisibleServerTodos } from '../reducers/index'

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
    todos: getVisibleServerTodos(state, filter),
    filter
  }
}

RouteVisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(RouteVisibleTodoList))

export default RouteVisibleTodoList
