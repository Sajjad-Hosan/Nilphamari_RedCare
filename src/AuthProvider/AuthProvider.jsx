import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth/web-extension";
import app from "../../firebase/firebase";

export const CreateContext = createContext();
const AuthProvider = ({ children }) => {
  // manage states
  const [mgUser, setMgUser] = useState([]);
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // initialize authentication and api provider
  const auth = getAuth(app);
  const axiosPublic = useAxiosPublic();
  const googlerProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (current) => {
      setUser(current);
      setLoading(false);

      //   calling jwt to update token
      if (current) {
        const jwtToken = await axiosPublic.post("/jwt", {
          email: current.email,
        });

        const getUser = await axiosPublic.get(
          `/user-find?email=${current.email}`
        );
        setMgUser(getUser?.data?.user);
      }
    });
    return () => unSubscribe();
  }, [auth]);

  const handleFirebaseRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleFirebaseLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleFirebaseLogout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const handleFirebaseGooglePopup = () => {
    setLoading(true);
    return signInWithPopup(auth, googlerProvider);
  };
  const handleFirebaseGithubPopup = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //   context values
  const values = {
    user,
    mgUser,
    users,
    loading,
    handleFirebaseRegister,
    handleFirebaseLogin,
    handleFirebaseLogout,
    handleFirebaseGooglePopup,
    handleFirebaseGithubPopup,
  };
  return (
    <CreateContext.Provider value={values}>{children}</CreateContext.Provider>
  );
};

export default AuthProvider;
