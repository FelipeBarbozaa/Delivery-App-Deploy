import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import isAuthentication from './auth';

export default function PrivateRoute({ children }) {
  const authed = isAuthentication();
  return authed ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
