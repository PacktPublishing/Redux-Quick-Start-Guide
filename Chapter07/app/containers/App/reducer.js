import { fromJS } from 'immutable';
import Cookie from 'js-cookie';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
} from 'containers/Login/constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  currentUser: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FAILURE:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST: {
      Cookie.remove('token');
      return state.set('loading', true).set('currentUser', fromJS({}));
    }
    case LOGIN_SUCCESS:
      Cookie.set('token', action.user.token, { expires: 7 });
      return state.set('loading', true).set('currentUser', fromJS(action.user));
    default:
      return state;
  }
}

export default appReducer;
