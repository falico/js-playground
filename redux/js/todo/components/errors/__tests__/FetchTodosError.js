import React from 'react'
import { shallow } from 'enzyme';
import FetchTodosError from '../FetchTodosError'

describe('FetchTodosError', () => {

  it('should render an error message', () => {
    const component = shallow(
      <FetchTodosError message="Error message" />
    );
    expect(component.find('p > i').text()).toEqual('Error message');
  });

  it('should call an external function when pressing the retry button', () => {
    const handler = jest.fn();
    const component = shallow(
      <FetchTodosError message="Error message" onRetry={handler} />
    );
    component.find('button').simulate('click', { preventDefault() {} });
    expect(handler).toHaveBeenCalled();
  })
})
