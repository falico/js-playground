import React from 'react'
import { shallow } from 'enzyme'
import AddTodo from '../AddTodo'
import Store from '../../__mocks__/store'

describe('AddTodo', () => {

  it("should not dispatch an action if the todo text is empty", () => {
    const store = Store({});
    const dispatchFn = jest.fn();

    const component = shallow(
      <AddTodo store={store} dispatch={dispatchFn} />
    ).shallow();

    component.find('button[type="submit"]').simulate('click', { preventDefault() {} });
    expect(store.dispatch).not.toHaveBeenCalled();

    component.find('input').get(0).value = 'text'
    component.find('input').get(0).simulate('change')

    // component.find('input').simulate('change', {target: {value: 'todo value'}});
    component.find('button[type="submit"]').simulate('click', { preventDefault() {} });
    expect(store.dispatch).not.toHaveBeenCalled();
  })

  xit('should dispatch an action an add todo action', () => {

  })

})
