import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import Footer from '..';
import ConnectedLanguageProvider from '../../../containers/LanguageProvider';
import configureStore from '../../../configureStore';

import { translationMessages } from '../../../i18n';

const messages = defineMessages({
  licenseMessage: {
    id: 'boilerplate.components.Footer.license.message',
    defaultMessage: 'This project is licensed under the MIT license.',
  },
});

describe('<Footer />', () => {
  let store;
  const Component = (props = {}) =>
    mount(
      <Provider store={store}>
        <ConnectedLanguageProvider messages={translationMessages}>
          <Footer {...props} />
        </ConnectedLanguageProvider>
      </Provider>,
    );

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <Provider store={store}>
          <ConnectedLanguageProvider messages={translationMessages}>
            <Footer />
          </ConnectedLanguageProvider>
        </Provider>,
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the default language messages', () => {
    const mountComponent = Component();

    expect(
      mountComponent.contains(
        <FormattedMessage {...messages.licenseMessage} />,
      ),
    ).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = Component({ attribute: 'test' });
    expect(renderedComponent.find('div').prop('attribute')).toBeUndefined();
  });
});
