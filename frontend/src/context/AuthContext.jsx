import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("chat-user");
    if (storedUser) setAuthUser(JSON.parse(storedUser));
    setLoading(false); // ✅ done loading
  }, []);

  if (loading) return null; // ✅ prevent blank render

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
