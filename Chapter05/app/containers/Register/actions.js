import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './constants';

export const onRegisterRequest = user =>
  console.log(user) || { type: REGISTER_REQUEST, user };

export const onRegisterSuccess = user => ({ type: REGISTER_SUCCESS, user });

export const onRegisterFailure = message => ({
  type: REGISTER_FAILURE,
  message,
});
