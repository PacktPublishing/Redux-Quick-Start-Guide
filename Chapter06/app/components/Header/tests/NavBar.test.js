import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { enzymeFind } from 'styled-components/test-utils';

import 'jest-styled-components';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('should match snapshot', () => {
    const rendereredComponent = renderer.create(<NavBar />).toJSON();
    expect(rendereredComponent).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const rendereredComponent = enzymeFind(mount(<NavBar />), NavBar);
    expect(rendereredComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const rendereredComponent = enzymeFind(mount(<NavBar id={id} />), NavBar);
    expect(rendereredComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const rendereredComponent = enzymeFind(
      mount(<NavBar something="test" />),
      NavBar,
    );
    expect(rendereredComponent.prop('something')).toBeUndefined();
  });
});
