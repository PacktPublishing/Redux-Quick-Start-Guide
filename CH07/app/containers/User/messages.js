/*
 * UserComponent Messages
 *
 * This contains all the text for the UserComponent component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'moment.containers.user';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Search user',
  },
  addHeader: {
    id: `${scope}.addHeader`,
    defaultMessage: 'Add new user',
  },
  editHeader: {
    id: `${scope}.editHeader`,
    defaultMessage: 'Edit: {name}',
  },
  addUser: {
    id: `${scope}.addUser`,
    defaultMessage: 'Add user',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter user name',
  },
  headerForm: {
    id: `${scope}.headerForm`,
    defaultMessage: 'User detail: {name}',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Submit',
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
  labelGender: {
    id: `${scope}.labelGender`,
    defaultMessage: 'Gender',
  },
  labelRole: {
    id: `${scope}.labelRole`,
    defaultMessage: 'Role',
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
  placeholderGender: {
    id: `${scope}.placeholderGender`,
    defaultMessage: 'Gender',
  },
  placeholderRole: {
    id: `${scope}.placeholderRole`,
    defaultMessage: 'Role',
  },
  maleGenderOption: {
    id: `${scope}.maleGenderOption`,
    defaultMessage: 'Male',
  },
  femaleGenderOption: {
    id: `${scope}.femaleGenderOption`,
    defaultMessage: 'Female',
  },
  otherGenderOption: {
    id: `${scope}.otherGenderOption`,
    defaultMessage: 'Other',
  },
  adminRoleOption: {
    id: `${scope}.adminRoleOption`,
    defaultMessage: 'Admin',
  },
  userRoleOption: {
    id: `${scope}.userRoleOption`,
    defaultMessage: 'User',
  },
  practitionerRoleOption: {
    id: `${scope}.practitionerRoleOption`,
    defaultMessage: 'Doctor',
  },
});
