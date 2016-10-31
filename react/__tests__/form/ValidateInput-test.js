import React from 'react';
import ValidateInput from '../../js/form/ValidateInput';
import Jest from 'jest';
import TestRenderer from 'react-test-renderer';

test('Validation input renders without error', () => {
  const component = TestRenderer.create(
    <ValidateInput
      label='Input label'
      placeHolder='Input placeholder'
      value="test"
      errorMsg='' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
