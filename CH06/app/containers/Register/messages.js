/*
 * RegisterPage Messages
 *
 * This contains all the text for the RegisterPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'moment.containers.register';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Register an account <br/>to Rask Lege',
  },
  labelEmail: {
    id: `${scope}.labelEmail`,
    defaultMessage: 'Email',
  },
  labelPassword: {
    id: `${scope}.labelPassword`,
    defaultMessage: 'Password',
  },
  labelConfirmPassword: {
    id: `${scope}.labelConfirmPassword`,
    defaultMessage: 'Confirm Password',
  },
  labelName: {
    id: `${scope}.labelName`,
    defaultMessage: 'Name',
  },
  placeholderEmail: {
    id: `${scope}.placeholderEmail`,
    defaultMessage: 'example@domain.com',
  },
  placeholderConfirmPassword: {
    id: `${scope}.placeholderConfirmPassword`,
    defaultMessage: 'Confirm Password',
  },
  placeholderPassword: {
    id: `${scope}.placeholderPassword`,
    defaultMessage: 'Password',
  },
  placeholderName: {
    id: `${scope}.placeholderName`,
    defaultMessage: 'Full name',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Create an account',
  },
});
