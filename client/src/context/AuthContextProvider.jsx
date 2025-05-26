import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get("/authentication/authenticate");
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser, Loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };

// import React, { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import { toast } from "react-toastify";

// export const AuthContext = createContext(null);

// export function AuthContextProvider({ children }) {
//   const [User, setUser] = useState(null);
//   const [IsLoggedIn, setIsLoggedIn] = useState(false);
//   const [Loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     authenticateUser();
//   }, []);

//   const authenticateUser = async () => {
//     try {
//       const response = await api.get("/authentication/authenticate");
//       toast.success(`Welcome ${response.data.user.username}`);
//       setUser(response.data.user);
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.error(error);
//       // navigate("/login");
//       setUser(null);
//       setIsLoggedIn(false);
//     }
//   };
//   return (
//     <AuthContext.Provider value={(User, IsLoggedIn, setIsLoggedIn)}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
