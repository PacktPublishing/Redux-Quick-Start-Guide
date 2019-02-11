import React from 'react';
import { mount } from 'enzyme';
import Input from '../input';

describe('<Input />', () => {
  let rendererComponent;
  const name = 'hallo';

  beforeAll(() => {
    rendererComponent = mount(
      <Input input={{ name }} meta={{ touched: false }} />,
    );
  });

  it('should have a child is label attribute', () => {
    expect(rendererComponent.find('label')).toBeDefined();
  });

  it('should not adopt an invalid attribute', () => {
    expect(rendererComponent.prop('hallo')).toBeUndefined();
  });

  it('should adopt a valid attribute', () => {
    expect(rendererComponent.find('input').prop('name')).toEqual(name);
  });
});
