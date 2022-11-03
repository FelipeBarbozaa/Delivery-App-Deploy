import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import isAuthentication from './auth';

export default function PrivateRoute({ children, type }) {
  const [logged, setLogged] = useState({ valid: false, role: '' });
  useEffect(() => {
    const checkToken = async () => {
      const response = await isAuthentication();
      setLogged({ valid: response.result, role: response.role });
    };
    checkToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logged.role]);

  if (logged.valid) {
    return logged.role === type ? children : <Navigate to="/login" />;
  }
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

PrivateRoute.defaultProps = {
  type: 'customer',
};
