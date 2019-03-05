import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import A from '../A';

describe('<A />', () => {
  const id = 'hallo';
  let renderedComponent;
  const InitComponent = (
    <MemoryRouter>
      <A to="/" id={id}>
        test
      </A>
    </MemoryRouter>
  );

  beforeAll(() => {
    renderedComponent = mount(InitComponent);
  });

  it('should match snapshot', () => {
    const rendereredComponent = renderer.create(InitComponent).toJSON();
    expect(rendereredComponent).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    expect(renderedComponent.find('a').prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    expect(renderedComponent.find('a').prop('id')).toEqual(id);
  });
});
