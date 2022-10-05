import React from "react";
import { isAuthentication } from "./auth";

import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Login } from "./login";

const PrivateRoute = ({ children }) => {
  const authed = isAuthentication()
  return authed ? children : <Navigate to="/" />;
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" element={<h1>Hello World</h1>} />
      <Route exact path="/login" element={
        <PrivateRoute>
          <Login />
        </PrivateRoute>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;