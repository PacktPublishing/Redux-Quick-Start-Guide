import { createStore } from 'redux';

import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  const store = createStore(createReducer());

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  return store;
}
