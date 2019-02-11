import request from 'utils/request';
import qs from 'query-string';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  USER_SEARCH_REQUEST,
  USER_REMOVE_REQUEST,
  USER_UPDATE_REQUEST,
  USER_CREATE_REQUEST,
  USER_DETAIL_REQUEST,
} from './constants';
import {
  onSearchSuccess,
  onSearchFailure,
  onRemoveSuccess,
  onRemoveFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onCreateSuccess,
  onCreateFailure,
  onDetailSuccess,
  onDetailFailure,
} from './actions';

export function* onSearchRequest(action) {
  try {
    const { success, users, message } = yield call(
      request,
      `/api/users?${qs.stringify(action.params)}`,
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

    yield put(onSearchSuccess(users));
  } catch (err) {
    notification.error({
      message: 'Search user unssucessfully',
      description: err.toString(),
    });

    yield put(onSearchFailure(err.toString()));
  }
}

export function* onRemoveRequest(action) {
  try {
    const { success, user, message } = yield call(
      request,
      `/api/users/${action.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!success) {
      throw message;
    }

    notification.success({
      message: 'Remove user ssucessfully',
      description: `${user.name} was removed`,
    });
    yield put(onRemoveSuccess(user));
  } catch (err) {
    notification.error({
      message: 'Remove user unssucessfully',
      description: err.toString(),
    });

    yield put(onRemoveFailure(err.toString()));
  }
}

export function* onUpdateRequest(action) {
  try {
    const { success, user, message } = yield call(
      request,
      `/api/users/${action.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: action.item }),
      },
    );

    if (!success) {
      throw message;
    }

    notification.success({
      message: 'Update user ssucessfully',
      description: `${user.name} was updated`,
    });

    action.cb && action.cb(user);
    yield put(onUpdateSuccess(user));
  } catch (err) {
    notification.error({
      message: 'Update user unssucessfully',
      description: err.toString(),
    });

    yield put(onUpdateFailure(err.toString()));
  }
}

export function* onCreateRequest(action) {
  try {
    const { success, user, message } = yield call(request, `/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: action.item }),
    });

    if (!success) {
      throw message;
    }

    notification.success({
      message: 'Create user ssucessfully',
      description: `${user.name} was created`,
    });
    action.cb && action.cb(user);
    yield put(onCreateSuccess(user));
  } catch (err) {
    notification.error({
      message: 'Create user unssucessfully',
      description: err.toString(),
    });

    yield put(onCreateFailure(err.toString()));
  }
}

export function* onDetailRequest(action) {
  try {
    const { success, user, message } = yield call(
      request,
      `/api/users/${action.id}`,
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
    yield put(onDetailSuccess(user));
  } catch (err) {
    notification.error({
      message: 'Fetch user unssucessfully',
      description: err.toString(),
    });

    yield put(onDetailFailure(err.toString()));
  }
}

export default function* data() {
  yield takeLatest(USER_SEARCH_REQUEST, onSearchRequest);
  yield takeLatest(USER_REMOVE_REQUEST, onRemoveRequest);
  yield takeLatest(USER_UPDATE_REQUEST, onUpdateRequest);
  yield takeLatest(USER_CREATE_REQUEST, onCreateRequest);
  yield takeLatest(USER_DETAIL_REQUEST, onDetailRequest);
}
