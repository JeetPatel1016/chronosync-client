import { Navigate, useLocation } from "react-router-dom";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
};

export default AuthGuard;
