import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import RouteFilterLink from '../RouteFilterLink';

describe('RouteFilterLink', () => {

  it('renders', () => {
    const component = shallow(
      <RouteFilterLink filter="value">
        Link text
      </RouteFilterLink>
    );

    const link = component.find(Link);
    expect(link.length).toBeTruthy();
    expect(link.prop('to')).toEqual('value');

    // using html() because text() doesn't work as expected
    expect(link.html()).toEqual('<a>Link text</a>');
  })

  it("should have a link that routes to an empty string if the filter value is 'all'", () => {
    const component = shallow(
      <RouteFilterLink filter="all">
        Link text
      </RouteFilterLink>
    );

    const link = component.find(Link);
    expect(link.prop('to')).toEqual('');
  })

})
