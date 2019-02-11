import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Logo from '../Logo';

describe('<Logo />', () => {
  const id = 'hallo';
  let renderedComponent;

  beforeAll(() => {
    renderedComponent = mount(<Logo id={id} />);
  });

  it('should match snapshot', () => {
    const rendereredComponent = renderer.create(<Logo />).toJSON();
    expect(rendereredComponent).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    expect(renderedComponent.find('img').prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    expect(renderedComponent.find('img').prop('id')).toEqual(id);
  });
});
