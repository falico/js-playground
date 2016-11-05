import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('Footer', () => {
  xit('renders', () => {
    const component = shallow(
      <Footer />
    );

    console.log(component.debug());

    let tree = component.debug().toJSON();
    expect(tree).toMatchSnapshot();
  });
})
