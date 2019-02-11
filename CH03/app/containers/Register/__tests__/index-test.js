import React from 'react';
import renderer from 'react-test-renderer';
import Register from '../index';

it('should render correctly', () => {
  const component = renderer.create(<Register />);
  expect(component.toJSON()).toMatchSnapshot();
});
