import React from 'react';
import { mount } from 'enzyme';
import Select from '../select';

describe('<Select />', () => {
  let rendererComponent;
  const name = 'hallo';
  const options = [...Array(10).keys()].map(i => ({ key: i, value: i }));

  beforeAll(() => {
    rendererComponent = mount(
      <Select input={{ name }} meta={{ touched: false }} options={options} />,
    );
  });

  it('should have a child is label attribute', () => {
    expect(rendererComponent.find('label')).toBeDefined();
  });

  it('should not have a select element', () => {
    expect(rendererComponent.find('select').length).toEqual(0);
  });

  it('should not adopt an invalid attribute', () => {
    expect(rendererComponent.prop('hallo')).toBeUndefined();
  });

  it('should have a className ant-select-selection', () => {
    expect(rendererComponent.find('.ant-select-selection')).toBeDefined();
  });
});
