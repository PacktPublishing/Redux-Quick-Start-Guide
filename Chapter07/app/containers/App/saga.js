import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { onLoginSuccess, onLoginFailure } from 'containers/Login/actions';
import { IS_USER_AUTHENTICATED } from './constants';

export function* onLoginRequest() {
  try {
    const { success, user, message } = yield call(request, '/api/users/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!success) {
      throw message;
    }

    yield put(onLoginSuccess(user));
  } catch (err) {
    yield put(onLoginFailure(err.toString()));
  }
}

export default function* data() {
  yield takeLatest(IS_USER_AUTHENTICATED, onLoginRequest);
}
