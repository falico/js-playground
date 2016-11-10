import React from 'react';
import { shallow } from 'enzyme';
import RouteVisibleTodoList from '../RouteVisibleTodoList';
import TodoList from '../../components/TodoList';
import Store from '../../__mocks__/store'
import Router from '../../__mocks__/router'

describe('RouteVisibleTodoList', () => {

  const todosList = {
    0: {
      id: 0,
      completed: true
    },
    1: {
      id: 1,
      completed: false
    },
    2: {
      id: 2,
      completed: true
    }
  };

  it('should set a todos prop', () => {
    const mockRouter = Router({
      params: {
        filter: 'all'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={Store({
        todos: {}
      })} router={mockRouter} />
    ).shallow();

    const todoList = component.find(TodoList);
    expect(todoList.length).toBeTruthy();
    expect(todoList.prop('todos')).toEqual({});
  })

  it("should return all todos if the filter value is set to 'all'", () => {
    const mockRouter = Router({
      params: {
        filter: 'all'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={Store({
        todos: todosList
      })} router={mockRouter} />
    ).shallow();

    expect(component.find(TodoList).prop('todos')).toEqual(todosList);
  })

  it("should return completed todos only if the filter value is set to 'completed'", () => {
    const mockRouter = Router({
      params: {
        filter: 'completed'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={Store({
        todos: todosList
      })} router={mockRouter} />
    ).shallow();

    expect(component.find(TodoList).prop('todos')).toEqual({
      0: {
        id: 0,
        completed: true
      },
      2: {
        id: 2,
        completed: true
      }
    });
  })

  it("should return an empty object if the filter value is set to 'completed' and there are no completed todo items", () => {
    const todosListActive = {
      0: {
        id: 0,
        completed: false
      }
    };
    const mockRouter = Router({
      params: {
        filter: 'completed'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={Store({
        todos: todosListActive
      })} router={mockRouter} />
    ).shallow();

    expect(component.find(TodoList).prop('todos')).toEqual({});
  })

  it("should return active todos only if the filter value is set to 'active'", () => {
    const mockRouter = Router({
      params: {
        filter: 'active'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={Store({
        todos: todosList
      })} router={mockRouter} />
    ).shallow();

    expect(component.find(TodoList).prop('todos')).toEqual({
      1: {
        id: 1,
        completed: false
      }
    });
  })

  it("should return an empty object if the filter value is set to 'active' and there are no active todo items", () => {
    const todosListCompleted = {
      0: {
        id: 0,
        completed: true
      }
    };
    const mockRouter = Router({
      params: {
        filter: 'active'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={Store({
        todos: todosListCompleted
      })} router={mockRouter} />
    ).shallow();

    expect(component.find(TodoList).prop('todos')).toEqual({});
  })

  it("should dispatch an action on click", () => {
    const store = Store({
      todos: todosList
    });

    const mockRouter = Router({
      params: {
        filter: 'all'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={store} router={mockRouter} />
    ).shallow();

    component.find(TodoList).prop('onTodoClick')();
    expect(store.dispatch).toHaveBeenCalled();
  })

})
