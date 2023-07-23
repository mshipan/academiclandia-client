import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { InfinitySpin } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <InfinitySpin width="200" color="#131D4E" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
