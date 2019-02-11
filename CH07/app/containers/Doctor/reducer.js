import { fromJS } from 'immutable';
import { LOGOUT_REQUEST } from 'containers/Login/constants';
import { DOCTOR_SEARCH_SUCCESS, DOCTOR_SEARCH_REQUEST } from './constants';

// The initial state of the doctor
const initialState = fromJS({
  rows: [],
  count: 0,
  totalPage: 0,
  currentPage: 0,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_REQUEST:
    case DOCTOR_SEARCH_REQUEST:
      return initialState;
    case DOCTOR_SEARCH_SUCCESS:
      return fromJS(action.doctors);
    default:
      return state;
  }
}

export default appReducer;
