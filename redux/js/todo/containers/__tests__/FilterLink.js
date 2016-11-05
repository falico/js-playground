import React from 'react';
import { shallow } from 'enzyme';
import FilterLink from '../FilterLink';
import Link from '../../components/Link';
import Store from '../../__mocks__/store'

describe('FilterLink', () => {

  it('should set an active prop', () => {
    const component = shallow(
      <FilterLink store={Store({})} filter="filter value">
        Link text
      </FilterLink>
    );

    const link = component.find(Link);
    expect(link.length).toBeTruthy();
    expect(link.prop('active')).toEqual(false);
  })

  it("should be active if its filter value is that of the state's visibilityFilter", () => {
    const component = shallow(
      <FilterLink store={Store({
        visibilityFilter: 'current filter'
      })} filter="current filter">
        Link text
      </FilterLink>
    );

    expect(component.find(Link).prop('active')).toEqual(true);
  })

  it("should dispatch an action on click", () => {
    const store = Store({});
    const component = shallow(
      <FilterLink store={store} filter="filter value">
        Link text
      </FilterLink>
    );

    component.find(Link).prop('onClick')();
    expect(store.dispatch).toHaveBeenCalled();
  })

})
