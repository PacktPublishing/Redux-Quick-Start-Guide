import request from 'utils/request';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { REGISTER_REQUEST } from './constants';
import { onRegisterSuccess, onRegisterFailure } from './actions';

export function* onRegisterRequest(action) {
  try {
    const { success, user, message } = yield call(request, 'api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action),
    });

    if (!success) {
      throw message;
    }

    notification.success({
      message: 'Register Successfully',
      description:
        'Thank for RaskLege. For now, you can login and use the system',
    });

    yield put(push('/login'));
    yield put(onRegisterSuccess(user));
  } catch (err) {
    notification.error({
      message: 'Register Unsuccessfully',
      description: err.toString(),
    });

    yield put(onRegisterFailure(err.toString()));
  }
}

export default function* data() {
  yield takeLatest(REGISTER_REQUEST, onRegisterRequest);
}
