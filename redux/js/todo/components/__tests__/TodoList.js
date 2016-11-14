import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../Todo';
import TodoList from '../TodoList';

describe('Todo List', () => {
  let handler;
  let todos;

  beforeEach(() => {
    handler = jest.fn();
    todos = [
      {
        id: "0",
        completed: true,
        text: 'first'
      },
      {
        id: "1",
        completed: true,
        text: 'second'
      }
    ]
  })

  it('should render a list of todo items', () => {
    const component = shallow(
      <TodoList todos={todos} onTodoClick={handler} />
    );
    expect(component.find(Todo).length).toEqual(2);
  })

  it('should call an event handler with the todo item id as parameter', () => {
    const component = shallow(
      <TodoList todos={todos} onTodoClick={handler} />
    );
    component.find(Todo).at(0).simulate('click', { preventDefault() {} });
    expect(handler.mock.calls[0][0]).toEqual("0");

    component.find(Todo).at(1).simulate('click', { preventDefault() {} });
    expect(handler.mock.calls[1][0]).toEqual("1");

    expect(handler).toHaveBeenCalledTimes(2);
  })
})
