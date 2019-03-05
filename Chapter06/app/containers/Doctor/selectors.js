import { createSelector } from 'reselect';

const selectDoctor = state => state.get('doctor');

const getDoctors = () =>
  createSelector(selectDoctor, state => state.get('rows').toJS());

const getTotalPage = () =>
  createSelector(selectDoctor, state => state.get('totalPage'));

const getCurrentPage = () =>
  createSelector(selectDoctor, state => state.get('currentPage'));

const getTotalItem = () =>
  createSelector(selectDoctor, state => state.get('count'));

export { selectDoctor, getDoctors, getTotalPage, getTotalItem, getCurrentPage };
