import React from 'react';
import { shallow } from 'enzyme';
import Link from '../Link';

describe('Link', () => {
  it('should render correctly when it is active', () => {
    const handler = jest.fn();
    const component = shallow(
      <Link active={true} onClick={handler}>
        link text
      </Link>
    );

    expect(component.find('span').length).toBeTruthy();
    expect(component.text()).toEqual('link text');
  })

  it('should render as a link when it is not active', () => {
    const handler = jest.fn();
    const component = shallow(
      <Link active={false} onClick={handler}>
        link text
      </Link>
    );

    expect(component.find('button').length).toBeTruthy();
    expect(component.text()).toEqual('link text');

    component.find('button').simulate('click', { preventDefault() {} });
    expect(handler).toHaveBeenCalled();
  })
})
