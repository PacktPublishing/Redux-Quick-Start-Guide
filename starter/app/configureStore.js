import { createStore, applyMiddleware, compose } from "redux";

import createReducer from "./reducers";

export default function configureStore(initialState = {}, history) {
  const store = createStore(
    createReducer(),
  );

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
