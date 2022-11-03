import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from 'react-router-dom';
import Checkout from '../pages/checkout/Checkout';
import Confirmation from '../pages/confirmation/Confirmation';
import Login from '../pages/login/Login';
import Admin from '../pages/admin/Admin';
import MyOrders from '../pages/myOrders/myOrders';
import OrderDetails from '../pages/orderDetails/OrderDetails';
import Products from '../pages/products/Products';
import Register from '../pages/register/Register';
import SellerOrders from '../pages/sellerOrders/SellerOrders';
import PrivateRoute from './PrivateRoutes';
import SellerOrderDetails from '../pages/sellerOrdersDetails/SellerOrderDetails';

// eslint-disable-next-line react/function-component-definition
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route
        exact
        path="/customer/products"
        element={
          <PrivateRoute type="customer">
            <Products />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/customer/checkout"
        element={
          <PrivateRoute type="customer">
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/customer/orders/:id"
        element={
          <PrivateRoute type="customer">
            <OrderDetails />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/customer/orders"
        element={
          <PrivateRoute type="customer">
            <MyOrders />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/seller/orders"
        element={
          <PrivateRoute type="seller">
            <SellerOrders />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/seller/orders/:id"
        element={
          <PrivateRoute type="seller">
            <SellerOrderDetails />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/admin/manage"
        element={
          <PrivateRoute type="administrator">
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/confirmation/:token" element={ <Confirmation /> } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
