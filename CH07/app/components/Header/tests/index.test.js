import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { FormattedMessage, defineMessages } from 'react-intl';
import { browserHistory, MemoryRouter } from 'react-router-dom';
import Header from '..';
import ConnectedLanguageProvider from '../../../containers/LanguageProvider';
import configureStore from '../../../configureStore';
import { translationMessages } from '../../../i18n';

const messages = defineMessages({
  login: {
    id: 'boilerplate.components.Header.login',
    defaultMessage: 'Login',
  },
  hello: {
    id: 'boilerplate.components.Header.hello',
    defaultMessage: 'Hello',
  },
});

describe('<Header />', () => {
  let store;
  const Component = (props = {}, initStore = false) =>
    mount(
      <Provider store={initStore || store}>
        <ConnectedLanguageProvider messages={translationMessages}>
          <MemoryRouter>
            <Header {...props} />
          </MemoryRouter>
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
            <MemoryRouter>
              <Header />
            </MemoryRouter>
          </ConnectedLanguageProvider>
        </Provider>,
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the default language messages', () => {
    const mountComponent = Component();

    expect(
      mountComponent.contains(<FormattedMessage {...messages.login} />),
    ).toBe(true);
  });

  it('should render the default language messages', () => {
    const mountComponent = Component();

    expect(
      mountComponent.contains(<FormattedMessage {...messages.login} />),
    ).toBe(true);
  });

  it('should render the default logged in', () => {
    const mountComponent = Component(
      {},
      configureStore(
        {
          global: { currentUser: { id: '123', email: 'something@domain.com' } },
        },
        browserHistory,
      ),
    );

    expect(
      mountComponent.contains(<FormattedMessage {...messages.hello} />),
    ).toBe(true);
  });
});
