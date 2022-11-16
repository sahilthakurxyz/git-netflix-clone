import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ childern }) => {
  let { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return childern;
};

export default ProtectedRoute;
