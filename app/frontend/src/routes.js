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
import Admin from './pages/admin/Admin';
import MyOrders from './pages/myOrders/myOrders';
import OrderDetails from './pages/orderDetails/OrderDetails';
import Products from './pages/products/Products';
import Register from './pages/register/Register';
import SellerOrders from './pages/sellerOrders/SellerOrders';
import PrivateRoute from './PrivateRoutes';
import SellerOrderDetails from './pages/sellerOrdersDetails/SellerOrderDetails';

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
      <Route
        exact
        path="/customer/orders/:id"
        element={
          <PrivateRoute>
            <OrderDetails />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/seller/orders"
        element={
          <PrivateRoute>
            <SellerOrders />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/customer/orders"
        element={
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/admin/manage"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/seller/orders/:id"
        element={
          <PrivateRoute>
            <SellerOrderDetails />
          </PrivateRoute>
        }
      />
      <Route path="/confirmation/:token" element={ <Confirmation /> } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
