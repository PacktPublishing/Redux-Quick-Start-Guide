import {
  DOCTOR_SEARCH_REQUEST,
  DOCTOR_SEARCH_SUCCESS,
  DOCTOR_SEARCH_FAILURE,
} from './constants';

export const onSearchRequest = params => ({
  type: DOCTOR_SEARCH_REQUEST,
  params,
});

export const onSearchSuccess = doctors => ({
  type: DOCTOR_SEARCH_SUCCESS,
  doctors,
});

export const onSearchFailure = message => ({
  type: DOCTOR_SEARCH_FAILURE,
  message,
});
