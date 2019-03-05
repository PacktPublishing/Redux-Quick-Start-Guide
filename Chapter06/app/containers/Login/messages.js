/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'moment.containers.login';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Rask Lege',
  },
  labelEmail: {
    id: `${scope}.labelEmail`,
    defaultMessage: 'Email address',
  },
  labelPassword: {
    id: `${scope}.labelPassword`,
    defaultMessage: 'Password',
  },
  placeholderEmail: {
    id: `${scope}.placeholderEmail`,
    defaultMessage: 'example@domain.com',
  },
  placeholderPassword: {
    id: `${scope}.placeholderPassword`,
    defaultMessage: 'Password',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Submit',
  },
});
