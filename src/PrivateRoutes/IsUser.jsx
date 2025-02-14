import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const IsUser = ({ children }) => {
  const { user } = useAuth();
  const {pathname} = useLocation();
  if (!user) {
    return <Navigate to={"/login"} replace state={pathname}/>;
  }
  return <>{children}</>;
};

export default IsUser;
