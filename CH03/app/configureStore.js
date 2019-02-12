import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';

import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  const middlewares = [routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers),
  );

  // Extensions
  store.injectedReducers = {};

  return store;
}
