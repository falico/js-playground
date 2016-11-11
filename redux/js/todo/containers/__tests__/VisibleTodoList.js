import React from 'react';
import { shallow } from 'enzyme';
import VisibleTodoList from '../VisibleTodoList';
import TodoList from '../../components/TodoList';
import Store from '../../__mocks__/store'
import { VisibilityFilters } from '../../actions/constants'

describe('VisibleTodoList', () => {

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
    // Preserve value
    const warnFn = console.warn;

    // Mock values
    console.warn = jest.fn();

    const component = shallow(
      <VisibleTodoList store={Store({
        todos: {
          byId: {},
          allIds: []
        }
      })} />
    );

    const todoList = component.find(TodoList);
    expect(todoList.length).toBeTruthy();
    expect(todoList.prop('todos')).toEqual([]);
    expect(console.warn).toHaveBeenCalled();

    // Restore original values
    console.warn = warnFn;
  })

  it("should return all todos if the visiblity filter value is set to show all", () => {
    const component = shallow(
      <VisibleTodoList store={Store({
        todos: todosList,
        visibilityFilter: VisibilityFilters.SHOW_ALL
      })} />
    );

    expect(component.find(TodoList).prop('todos')).toEqual([todo1, todo2, todo3]);
  })

  it("should return completed todos only if the visiblity filter value is set to show completed", () => {
    const component = shallow(
      <VisibleTodoList store={Store({
        todos: todosList,
        visibilityFilter: VisibilityFilters.SHOW_COMPLETED
      })} />
    );

    expect(component.find(TodoList).prop('todos')).toEqual([todo1, todo3]);
  })

  it("should return an empty array if the visiblity filter value is set to show completed and there are no completed todo items", () => {
    const todosListActive = {
      byId: {
        "2": todo2
      },
      allIds: ["2"]
    };

    const component = shallow(
      <VisibleTodoList store={Store({
        todos: todosListActive,
        visibilityFilter: VisibilityFilters.SHOW_COMPLETED
      })} />
    );

    expect(component.find(TodoList).prop('todos')).toEqual([]);
  })

  it("should return active todos only if the visiblity filter value is set to show active", () => {
    const component = shallow(
      <VisibleTodoList store={Store({
        todos: todosList,
        visibilityFilter: VisibilityFilters.SHOW_ACTIVE
      })} />
    );

    expect(component.find(TodoList).prop('todos')).toEqual([todo2]);
  })

  it("should return an empty array if the visiblity filter value is set to show active and there are no active todo items", () => {
    const todosListCompleted = {
      byId: {
        "1": todo1
      },
      allIds: ["1"]
    };

    const component = shallow(
      <VisibleTodoList store={Store({
        todos: todosListCompleted,
        visibilityFilter: VisibilityFilters.SHOW_ACTIVE
      })} />
    );

    expect(component.find(TodoList).prop('todos')).toEqual([]);
  })

  it("should dispatch an action on click", () => {
    const store = Store({
      todos: todosList,
      visibilityFilter: VisibilityFilters.SHOW_ALL
    });
    const component = shallow(
      <VisibleTodoList store={store} />
    );

    component.find(TodoList).prop('onTodoClick')();
    expect(store.dispatch).toHaveBeenCalled();
  })

})
