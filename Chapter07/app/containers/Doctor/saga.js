import request from 'utils/request';
import qs from 'query-string';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';
import { DOCTOR_SEARCH_REQUEST } from './constants';
import { onSearchSuccess, onSearchFailure } from './actions';

export function* onSearchRequest(action) {
  try {
    const { success, doctor, message } = yield call(
      request,
      `/api/practitioners?${qs.stringify(action.params)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!success) {
      throw message;
    }

    yield put(onSearchSuccess(doctor));
  } catch (err) {
    notification.error({
      message: 'Search doctor unssucessfully',
      description: err.toString(),
    });

    yield put(onSearchFailure(err.toString()));
  }
}

export default function* data() {
  yield takeLatest(DOCTOR_SEARCH_REQUEST, onSearchRequest);
}
