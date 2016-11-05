import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import Footer from '../Footer'
import Store from '../../__mocks__/store'

describe('Footer', () => {

  it('renders', () => {
    const component = renderer.create(
      <Provider store={Store({})}>
        <Footer />
      </Provider>,
    );

    // console.log(component.debug());

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
