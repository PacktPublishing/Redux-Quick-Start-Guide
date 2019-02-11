import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Register',
  },
  helloHeader: {
    id: `${scope}.hello`,
    defaultMessage: 'Hello',
  },
});
