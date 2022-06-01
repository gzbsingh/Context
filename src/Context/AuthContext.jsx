import React, { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuhtProvider = ({ children }) => {
  const [isAutho, setAutho] = useState(false);
  const login = (user, pass) => {
    if (user && pass) setAutho(true);
  };
  const logout = () => {
    setAutho(false);
  };
  return (
    <AuthContext.Provider value={{ isAutho, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
