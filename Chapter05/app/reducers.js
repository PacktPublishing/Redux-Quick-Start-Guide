import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer as formReducer } from 'redux-form/immutable';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form: formReducer,
    global: globalReducer,
    ...injectedReducers,
  });

  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
