import React from 'react';
import { shallow } from 'enzyme';
import VisibleTodoList from '../VisibleTodoList';
import TodoList from '../../components/TodoList';
import Store from '../../__mocks__/store'
import { VisibilityFilters } from '../../actions/constants'

describe('VisibleTodoList', () => {

  it('should set a todos prop', () => {
    const component = shallow(
      <VisibleTodoList store={Store({
        todos: {}
      })} />
    );

    const todoList = component.find(TodoList);
    expect(todoList.length).toBeTruthy();
    expect(todoList.prop('todos')).toEqual({});
  })

  it("should return all todos if the visiblity filter value is set to show all", () => {
    const todosList = {
      0: {
        id: 0,
        completed: true
      },
      1: {
        id: 1,
        completed: false
      }
    };
    const component = shallow(
      <VisibleTodoList store={Store({
        todos: todosList,
        visibilityFilter: VisibilityFilters.SHOW_ALL
      })} />
    );

    expect(component.find(TodoList).prop('todos')).toEqual(todosList);
  })

  it("should return completed todos only if the visiblity filter value is set to show completed", () => {
    const todosList = {
      0: {
        id: 0,
        completed: true
      },
      1: {
        id: 1,
        completed: false
      }
    };
    const component = shallow(
      <VisibleTodoList store={Store({
        todos: todosList,
        visibilityFilter: VisibilityFilters.SHOW_COMPLETED
      })} />
    );

    expect(component.find(TodoList).prop('todos')).toEqual({
      0: {
        id: 0,
        completed: true
      }
    });
  })

  it("should return an empty object if the visiblity filter value is set to show completed and there are no completed todo items", () => {
    const todosList = {
      0: {
        id: 0,
        completed: false
      },
      1: {
        id: 1,
        completed: false
      }
    };
    const component = shallow(
      <VisibleTodoList store={Store({
        todos: todosList,
        visibilityFilter: VisibilityFilters.SHOW_COMPLETED
      })} />
    );

    expect(component.find(TodoList).prop('todos')).toEqual({});
  })

  it("should return active todos only if the visiblity filter value is set to show active", () => {
    const todosList = {
      0: {
        id: 0,
        completed: true
      },
      1: {
        id: 1,
        completed: false
      }
    };
    const component = shallow(
      <VisibleTodoList store={Store({
        todos: todosList,
        visibilityFilter: VisibilityFilters.SHOW_ACTIVE
      })} />
    );

    expect(component.find(TodoList).prop('todos')).toEqual({
      1: {
        id: 1,
        completed: false
      }
    });
  })

  it("should return an empty object if the visiblity filter value is set to show active and there are no active todo items", () => {
    const todosList = {
      0: {
        id: 0,
        completed: true
      },
      1: {
        id: 1,
        completed: true
      }
    };
    const component = shallow(
      <VisibleTodoList store={Store({
        todos: todosList,
        visibilityFilter: VisibilityFilters.SHOW_ACTIVE
      })} />
    );

    expect(component.find(TodoList).prop('todos')).toEqual({});
  })

  it("should dispatch an action on click", () => {
    const store = Store({
      todos: {
        0: {
          id: 0,
          text: 'Test',
          completed: false
        }
      },
      visibilityFilter: VisibilityFilters.SHOW_ALL
    });
    const component = shallow(
      <VisibleTodoList store={store} />
    );

    component.find(TodoList).prop('onTodoClick')();
    expect(store.dispatch).toHaveBeenCalled();
  })

})
