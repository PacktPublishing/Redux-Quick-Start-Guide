import React from 'react';
import renderer from 'react-test-renderer';
import AboutPage from '../index';

it('should render correctly', () => {
  const component = renderer.create(<AboutPage />);
  expect(component.toJSON()).toMatchSnapshot();
});
