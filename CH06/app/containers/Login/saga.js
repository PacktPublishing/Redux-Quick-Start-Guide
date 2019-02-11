import request from 'utils/request';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './constants';
import { onLoginSuccess, onLoginFailure } from './actions';

export function* onLoginRequest(action) {
  try {
    const { success, user, message } = yield call(request, 'api/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action),
    });

    if (!success) {
      throw message;
    }

    yield put(onLoginSuccess(user));
  } catch (err) {
    notification.error({
      message: 'Login Failure',
      description: err.toString(),
    });

    yield put(onLoginFailure(err.toString()));
  }
}

export default function* data() {
  yield takeLatest(LOGIN_REQUEST, onLoginRequest);
}
