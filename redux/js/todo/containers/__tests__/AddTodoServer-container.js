import React from 'react'
import { mount } from 'enzyme'
import AddTodoServer from '../AddTodoServer'
import Store from '../../__mocks__/store'

describe('AddTodoServer', () => {

  it("should not dispatch an action if the todo text is empty", () => {
    const store = Store({});
    const component = mount(
      <AddTodoServer store={store} />
    );

    component.find('form').simulate('submit')
    expect(store.dispatch).not.toHaveBeenCalled()

    const input = component.find('input')
    input.node.value = '     ';    // Input will be trimmed
    input.simulate('change', input);

    component.find('form').simulate('submit')
    expect(store.dispatch).not.toHaveBeenCalled();
  })

  it('should dispatch an action on submit', () => {
    const store = Store({});
    const component = mount(
      <AddTodoServer store={store} />
    );

    const input = component.find('input')
    input.node.value = 'Todo item'
    input.simulate('change', input);

    expect(component.find('input').get(0).value).toEqual('Todo item')
    component.find('form').simulate('submit')

    // Input text is reset after submit
    expect(component.find('input').get(0).value).toEqual('');
    expect(store.dispatch).toHaveBeenCalled();
  })

})
