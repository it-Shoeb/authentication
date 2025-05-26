import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoute() {
  const { isAuthenticated, Loading, User } = useContext(AuthContext);
  console.log("Auth Route " + isAuthenticated, Loading, User);

  Loading && <p>Loading</p>;
  return !isAuthenticated ? <Outlet /> : <Navigate to="/home" replace />;
}
