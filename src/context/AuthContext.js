// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken');
  };

  const isAuthenticated = () => {
    return authToken !== null;
  };

  const isAdmin = () => {
    if (authToken) {
      const decodedToken = jwtDecode(authToken);
      return decodedToken.isAdmin;
    }
    return false;
  };

  const authContextValue = {
    authToken,
    login,
    logout,
    isAuthenticated,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
