import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from 'react-router-dom';
import Checkout from './pages/checkout/Checkout';
import Confirmation from './pages/confirmation/Confirmation';
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import Register from './pages/register/Register';
import PrivateRoute from './PrivateRoutes';

// eslint-disable-next-line react/function-component-definition
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route
        exact
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/customer/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route path="/confirmation/:token" element={ <Confirmation /> } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
