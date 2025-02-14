import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SettingDrop from "../../components/SettingDrop/SettingDrop";
import LogoutModal from "../../components/Shared/LogoutModal";
import Alerts from "../../components/Shared/Alerts";
import WelcomeAlert from "../../components/Shared/WelcomeAlert";
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
      <Alerts />
    </div>
  );
};

export default Root;
