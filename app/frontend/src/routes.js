import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoutes';

// eslint-disable-next-line react/function-component-definition
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route
        exact
        path="/produtos"
        element={
          <PrivateRoute>Você está logado na tela de produtos.</PrivateRoute>
        }
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
