// src/context/AuthProvider.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const SHORTLIST_KEY = 'shortlist';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [shortlist, setShortlist] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
    const storedShortlist = JSON.parse(localStorage.getItem(SHORTLIST_KEY)) || [];
    setShortlist(storedShortlist);
  }, []);

  useEffect(() => {
    localStorage.setItem(SHORTLIST_KEY, JSON.stringify(shortlist));
  }, [shortlist]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, shortlist, setShortlist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
