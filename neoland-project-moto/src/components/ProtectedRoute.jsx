import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../context/Context";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(userContext);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;