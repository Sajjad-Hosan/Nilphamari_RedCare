import { useContext } from "react";
import { CreateContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const auth = useContext(CreateContext);
  return auth;
};
export default useAuth;
