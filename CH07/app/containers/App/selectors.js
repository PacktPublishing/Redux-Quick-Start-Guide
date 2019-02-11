import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState =>
      globalState.get('currentUser')
        ? globalState.get('currentUser').toJS()
        : {},
  );

const makeSelectLogedIn = () =>
  createSelector(
    selectGlobal,
    globalState => !!globalState.getIn(['currentUser', 'id']),
  );

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

export {
  selectGlobal,
  makeSelectLogedIn,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
};
