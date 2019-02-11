import React from 'react';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import saga from './saga';
import reducer from './reducer';
import All from './All';
import AddUser from './Add';
import EditUser from './Edit';

const User = () => (
  <Switch>
    <Route exact path="/" component={All} />
    <Route exact path="/users/add" component={AddUser} />
    <Route path="/users/:id/edit" component={EditUser} />
  </Switch>
);

const withSaga = injectSaga({ key: 'user', saga });
const withReducer = injectReducer({ key: 'user', reducer });

export default compose(
  withSaga,
  withReducer,
)(User);
