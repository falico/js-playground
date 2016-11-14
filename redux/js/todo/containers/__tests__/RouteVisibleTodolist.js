import React from 'react';
import { shallow } from 'enzyme';
import RouteVisibleTodoList from '../RouteVisibleTodoList';
import Store from '../../__mocks__/store'
import Router from '../../__mocks__/router'

describe('RouteVisibleTodoList', () => {

  const todo1 = {
    id: "1",
    text: 'Get state from store',
    completed: true
  };
  const todo2 = {
    id: "2",
    text: 'Transform state for UI consumption',
    completed: false
  };
  const todo3 = {
    id: "3",
    text: 'Pass transformed state to UI',
    completed: true
  };

  const todosList = {
    byId: {
      "1": todo1,
      "2": todo2,
      "3": todo3
    },
    allIds: ["1", "2", "3"]
  };

  it('should set a todos prop', () => {
    const mockRouter = Router({
      params: {
        filter: 'all'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={Store({
        todos: {
          byId: {},
          allIds: []
        }
      })} router={mockRouter} />
    ).shallow();

    expect(component.length).toBeTruthy();
    expect(component.prop('todos')).toEqual([]);
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

    expect(component.prop('todos')).toEqual([todo1, todo2, todo3]);
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

    expect(component.prop('todos')).toEqual([todo1, todo3]);
  })

  it("should return an empty array if the filter value is set to 'completed' and there are no completed todo items", () => {
    const todosListActive = {
      byId: {
        "2": todo2
      },
      allIds: ["2"]
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

    expect(component.prop('todos')).toEqual([]);
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

    expect(component.prop('todos')).toEqual([todo2]);
  })

  it("should return an empty array if the filter value is set to 'active' and there are no active todo items", () => {
    const todosListCompleted = {
      byId: {
        "1": todo1
      },
      allIds: ["1"]
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

    expect(component.prop('todos')).toEqual([]);
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

    component.prop('onTodoClick')();
    expect(store.dispatch).toHaveBeenCalled();
  })

})
