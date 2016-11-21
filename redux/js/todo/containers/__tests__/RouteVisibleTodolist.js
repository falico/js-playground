import React from 'react';
import { shallow, mount } from 'enzyme';
import RouteVisibleTodoList from '../RouteVisibleTodoList';
import { ACTIONS } from '../../actions/constants';
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
    listByFilter: {
      all: {
        isFetching: false,
        ids: ["1", "2", "3"]
      },
      active: {
        isFetching: false,
        ids: ["2"]
      },
      completed: {
        isFetching: false,
        ids: ["1", "3"]
      }
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
        todosFromServer: {
          byId: {},
          listByFilter: {
            all: {
              isFetching: false,
              ids: []
            }
          }
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
        todosFromServer: todosList
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
        todosFromServer: todosList
      })} router={mockRouter} />
    ).shallow();

    expect(component.prop('todos')).toEqual([todo1, todo3]);
  })

  it("should return an empty array if the filter value is set to 'completed' and there are no completed todo items", () => {
    const todosListActive = {
      byId: {},
      listByFilter: {
        completed: {
          isFetching: false,
          ids: []
        }
      }
    };

    const mockRouter = Router({
      params: {
        filter: 'completed'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={Store({
        todosFromServer: todosListActive
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
        todosFromServer: todosList
      })} router={mockRouter} />
    ).shallow();

    expect(component.prop('todos')).toEqual([todo2]);
  })

  it("should return an empty array if the filter value is set to 'active' and there are no active todo items", () => {
    const todosListCompleted = {
      byId: {},
      listByFilter: {
        active: {
          isFetching: false,
          ids: []
        }
      }
    };

    const mockRouter = Router({
      params: {
        filter: 'active'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={Store({
        todosFromServer: todosListCompleted
      })} router={mockRouter} />
    ).shallow();

    expect(component.prop('todos')).toEqual([]);
  })

  it("should fetch todo data on mount", () => {

    const mockRouter = Router({
      params: {
        filter: 'all'
      }
    });

    const component = mount(
      <RouteVisibleTodoList store={Store({
        todosFromServer: todosList
      })} router={mockRouter} />
    );

    const storeDispatch = component.prop('store').dispatch;

    expect(storeDispatch).toHaveBeenCalled();
    // The dispatch function should have received a thunk as an argument
    expect(typeof storeDispatch.mock.calls[0][0]).toEqual('function');
  })

  it("should display a loading indicator if no data has been fetched and the fetching flag is set", () => {
    const mockRouter = Router({
      params: {
        filter: 'all'
      }
    });

    const component = mount(
      <RouteVisibleTodoList store={Store({
        todosFromServer: {
          byId: {},
          listByFilter: {
            all: {
              isFetching: true,
              ids: []
            }
          }
        }
      })} router={mockRouter} />
    );

    expect(component.find('p').text()).toEqual('Loading ...');
  })

  it("should dispatch actions", () => {
    const store = Store({
      todosFromServer: todosList
    });

    const mockRouter = Router({
      params: {
        filter: 'all'
      }
    });

    const component = shallow(
      <RouteVisibleTodoList store={store} router={mockRouter} />
    ).shallow();

    component.prop('toggleTodo')();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  })

})
