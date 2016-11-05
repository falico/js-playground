import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../Todo';

describe('Todo', () => {
  let handler;

  beforeEach(() => {
    handler = jest.fn();
  })

  it('should render', () => {
    const component = shallow(
      <Todo completed={false} text="to-do text" onClick={handler} />
    );
    expect(component.find('li').length).toBeTruthy();
    expect(component.text()).toEqual('to-do text');
  })

  it('should render without line-through when not completed', () => {
    const component = shallow(
      <Todo completed={false} text="to-do text" onClick={handler} />
    );
    expect(component.props().style.textDecoration).toEqual('none');
  })

  it('should render with line-through when completed', () => {
    const component = shallow(
      <Todo completed={true} text="to-do text" onClick={handler} />
    );
    expect(component.props().style.textDecoration).toEqual('line-through');
  })

  it('should call an event handler on click', () => {
    const component = shallow(
      <Todo completed={true} text="to-do text" onClick={handler} />
    );
    component.find('li').simulate('click', { preventDefault() {} });
    expect(handler).toHaveBeenCalled();
  })
})
