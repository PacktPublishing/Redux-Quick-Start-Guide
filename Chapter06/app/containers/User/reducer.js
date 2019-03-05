import { fromJS } from 'immutable';
import { LOGOUT_REQUEST } from 'containers/Login/constants';
import {
  USER_SEARCH_SUCCESS,
  USER_SEARCH_REQUEST,
  USER_REMOVE_REQUEST,
  USER_REMOVE_SUCCESS,
  USER_REMOVE_FAILURE,
  USER_UPDATE_SUCCESS,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  rows: [],
  count: 0,
  totalPage: 0,
  currentPage: 0,
  deleting: '',
  detail: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_REQUEST:
    case USER_SEARCH_REQUEST:
      return initialState;
    case USER_DETAIL_REQUEST:
      return state.set('detail', action.id);
    case USER_DETAIL_SUCCESS: {
      const rows = state.get('rows').toJS();
      const index = rows.findIndex(item => item.id === action.user.id);

      if (index < 0) {
        return state.set('rows', fromJS([action.user, ...rows]));
      }

      return state.set(
        'rows',
        fromJS(
          rows.map(item => (item.id === action.user.id ? action.user : item)),
        ),
      );
    }
    case USER_SEARCH_SUCCESS: {
      const { rows, count, totalPage, currentPage } = action.users;

      return state
        .set('rows', fromJS(rows))
        .set('count', fromJS(count))
        .set('totalPage', fromJS(totalPage))
        .set('currentPage', fromJS(currentPage));
    }
    case USER_REMOVE_REQUEST:
      return state.set('deleting', action.id);
    case USER_REMOVE_FAILURE:
    case USER_REMOVE_SUCCESS:
      return state.set('deleting', '');
    case USER_UPDATE_SUCCESS: {
      const rows = (state.get('rows') || fromJS([])).toJS();
      return state.set(
        'rows',
        fromJS(
          rows.map(item => (item.id === action.user.id ? action.user : item)),
        ),
      );
    }
    default:
      return state;
  }
}

export default appReducer;
