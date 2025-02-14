import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Donors from "../pages/Donors/Donors";
import BeADonor from "../pages/BeADonor/BeADonor";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import SetProfile from "../pages/Register/SetProfile";
import ProfilePage from "../pages/Profile/Profile";
import ForgotPass from "../pages/Login/ForgotPass";
import IsUser from "../PrivateRoutes/IsUser";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donors",
        element: <Donors />,
      },
      {
        path: "/new-donor",
        element: <BeADonor />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: (
          <IsUser>
            <ProfilePage />
          </IsUser>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgotPass />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/set-profile",
    element: <SetProfile />,
  },
]);
