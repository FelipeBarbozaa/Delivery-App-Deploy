import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import isAuthentication from './auth';

export default function PrivateRoute({ children }) {
  const [callback, setCallback] = useState(0);
  const [logged, setLogged] = useState(false);
  const checkToken = async () => {
    const result = await isAuthentication();
    setLogged(result);
    setCallback(1);
  };
  checkToken();
  if (callback === 1) {
    return logged ? children : <Navigate to="/login" />;
  }
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
