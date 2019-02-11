import { createSelector } from 'reselect';

const selectUser = state => state.get('user');

const getUser = () =>
  createSelector(selectUser, state => {
    const id = state.get('detail');
    const users = state.get('rows').toJS() || [];
    return users.find(item => item.id === id) || {};
  });

const getUsers = () =>
  createSelector(selectUser, state => state.get('rows').toJS());

const getTotalPage = () =>
  createSelector(selectUser, state => state.get('totalPage'));

const getCurrentPage = () =>
  createSelector(selectUser, state => state.get('currentPage'));

const getTotalItem = () =>
  createSelector(selectUser, state => state.get('count'));

const getDeleteItem = () =>
  createSelector(selectUser, state => state.get('deleting'));

export {
  selectUser,
  getUser,
  getUsers,
  getTotalPage,
  getTotalItem,
  getCurrentPage,
  getDeleteItem,
};
