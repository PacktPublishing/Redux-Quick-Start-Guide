import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

export default User;
