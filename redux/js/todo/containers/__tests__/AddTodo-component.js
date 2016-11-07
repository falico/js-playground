import React from 'react'
import renderer from 'react-test-renderer'
import AddTodo from '../AddTodo'
import Store from '../../__mocks__/store'

describe('AddTodo', () => {
  it('renders', () => {
    const component = renderer.create(
      <AddTodo store={Store({})} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
