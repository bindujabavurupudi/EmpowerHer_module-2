import { createContext, useContext, useEffect, useState } from "react";
import {
  loginUser,
  signupUser,
  logoutUser,
  observeAuthState,
} from "../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = observeAuthState((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    login: loginUser,
    signup: signupUser,
    logout: logoutUser,
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
