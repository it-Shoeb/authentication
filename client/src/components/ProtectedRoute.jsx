import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
import { AuthContext } from "../context/AuthContextProvider";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
