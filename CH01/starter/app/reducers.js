import { combineReducers } from 'redux';

import history from 'utils/history';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
  });
  return rootReducer;
}
