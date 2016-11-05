import React from 'react';
import { shallow } from 'enzyme';
import FilterLink from '../FilterLink';
import Link from '../../components/Link';

describe('FilterLink', () => {
  let fakeStore;

  beforeEach(() => {
    fakeStore = jest.fn((state) => {
    	return {
    		subscribe: () => {},
    		dispatch: jest.fn(() => {}),
    		getState: () => {
    			return { ...state };
    	  }
      }
    });
  })

  it('should set an active prop', () => {
    const component = shallow(
      <FilterLink store={fakeStore({})} filter="filter value">
        Link text
      </FilterLink>
    );

    const link = component.find(Link);
    expect(link.length).toBeTruthy();
    expect(link.prop('active')).toEqual(false);
  })

  it("should be active if its filter value is that of the state's visibilityFilter", () => {
    const component = shallow(
      <FilterLink store={fakeStore({
        visibilityFilter: 'current filter'
      })} filter="current filter">
        Link text
      </FilterLink>
    );

    expect(component.find(Link).prop('active')).toEqual(true);
  })

  it("should dispatch an action on click", () => {
    const store = fakeStore({});
    const component = shallow(
      <FilterLink store={store} filter="filter value">
        Link text
      </FilterLink>
    );

    component.find(Link).prop('onClick')();
    expect(store.dispatch).toHaveBeenCalled();
  })
  
})
