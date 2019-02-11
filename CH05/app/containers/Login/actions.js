import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './constants';

export const onLoginRequest = user =>
  console.log(user) || { type: LOGIN_REQUEST, user };
export const onLoginSuccess = user => ({ type: LOGIN_SUCCESS, user });
export const onLoginFailure = message => ({ type: LOGIN_FAILURE, message });
export const onLogoutRequest = () => ({ type: LOGOUT_REQUEST });
export const onLogoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const onLogoutFailure = message => ({ type: LOGOUT_FAILURE, message });
