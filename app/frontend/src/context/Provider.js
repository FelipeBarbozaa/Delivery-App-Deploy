import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import appContext from './AppContext';

export default function Provider({ children }) {
  const [user, setUser] = useState([]);
  console.log(user);

  const saveUserInfo = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem('token', userInfo.token);
    localStorage.setItem('name', userInfo.name);
    localStorage.setItem('email', userInfo.email);
    localStorage.setItem('role', userInfo.role);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const context = useMemo(() => ({
    saveUserInfo,
  }));

  return (
    <appContext.Provider value={ context }>
      {children}
    </appContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf,
}.isRequired;
