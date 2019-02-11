import React from 'react';
import { Route, Link } from 'react-router-dom';

const MenuLink = ({ to, ...rest }) => (
  <Route path={to}>
    {({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link to={to} {...rest} />
      </li>
    )}
  </Route>
);

const Homepage = () => (
  <div>
    <h1>This is home page our our application.</h1>
    <ul>
      <MenuLink to="/about">About Us</MenuLink>
      <MenuLink to="/login">Login</MenuLink>
      <MenuLink to="/register">Register</MenuLink>
      <MenuLink to="/contact">Contact</MenuLink>
      <MenuLink to="/users/add">Add New User</MenuLink>
    </ul>
  </div>
);

export default Homepage;
