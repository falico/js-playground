import React from 'react'
import renderer from 'react-test-renderer'
import AddTodoServer from '../AddTodoServer'
import Store from '../../__mocks__/store'

describe('AddTodoServer', () => {
  it('renders', () => {
    const component = renderer.create(
      <AddTodoServer store={Store({})} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
