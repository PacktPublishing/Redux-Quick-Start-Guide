import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { enzymeFind } from 'styled-components/test-utils';
import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should match snapshot', () => {
    const rendereredComponent = renderer.create(<Wrapper />).toJSON();
    expect(rendereredComponent).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const rendereredComponent = enzymeFind(mount(<Wrapper />), Wrapper);
    expect(rendereredComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const rendereredComponent = enzymeFind(mount(<Wrapper id={id} />), Wrapper);
    expect(rendereredComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const rendereredComponent = enzymeFind(
      mount(<Wrapper something="test" />),
      Wrapper,
    );
    expect(rendereredComponent.prop('something')).toBeUndefined();
  });
});
