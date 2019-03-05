import React from "react";
import { Route, Redirect } from "react-router-dom";

const redirect = () => (
  <Route
    exact
    path="/"
    render={() =>
      loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />
    }
  />
);

export default redirect;
