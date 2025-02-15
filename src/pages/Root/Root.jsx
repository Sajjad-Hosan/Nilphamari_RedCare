import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SettingDrop from "../../components/SettingDrop/SettingDrop";
import LogoutModal from "../../components/Shared/LogoutModal";
import WelcomeAlert from "../../components/Shared/WelcomeAlert";
import { ToastContainer } from "react-toastify";
const Root = () => {
  return (
    <div className="px-4 pt-2 raleway">
      <Header />
      <Outlet />
      <Footer />
      <SettingDrop />
      {/*  */}
      <WelcomeAlert />
      <LogoutModal />
      <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            theme="light"
            closeButton={false}
            
          />
    </div>
  );
};

export default Root;
