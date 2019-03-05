import {
  USER_SEARCH_REQUEST,
  USER_SEARCH_SUCCESS,
  USER_SEARCH_FAILURE,
  USER_REMOVE_REQUEST,
  USER_REMOVE_SUCCESS,
  USER_REMOVE_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILURE,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAILURE,
} from './constants';

export const onSearchRequest = params => ({
  type: USER_SEARCH_REQUEST,
  params,
});

export const onSearchSuccess = users => ({
  type: USER_SEARCH_SUCCESS,
  users,
});

export const onSearchFailure = message => ({
  type: USER_SEARCH_FAILURE,
  message,
});

export const onRemoveRequest = id => ({
  type: USER_REMOVE_REQUEST,
  id,
});

export const onRemoveSuccess = users => ({
  type: USER_REMOVE_SUCCESS,
  users,
});

export const onRemoveFailure = message => ({
  type: USER_REMOVE_FAILURE,
  message,
});

export const onUpdateRequest = (id, item, cb) => ({
  type: USER_UPDATE_REQUEST,
  id,
  cb,
  item,
});

export const onUpdateSuccess = user => ({
  type: USER_UPDATE_SUCCESS,
  user,
});

export const onUpdateFailure = message => ({
  type: USER_UPDATE_FAILURE,
  message,
});

export const onCreateRequest = (item, cb) => ({
  type: USER_CREATE_REQUEST,
  cb,
  item,
});

export const onCreateSuccess = user => ({
  type: USER_CREATE_SUCCESS,
  user,
});

export const onCreateFailure = message => ({
  type: USER_CREATE_FAILURE,
  message,
});

export const onDetailRequest = (id, cb) => ({
  type: USER_DETAIL_REQUEST,
  cb,
  id,
});

export const onDetailSuccess = user => ({
  type: USER_DETAIL_SUCCESS,
  user,
});

export const onDetailFailure = message => ({
  type: USER_DETAIL_FAILURE,
  message,
});
