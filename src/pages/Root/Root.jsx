import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SettingDrop from "../../components/SettingDrop/SettingDrop";

const Root = () => {
  return (
    <div className="px-4 pt-2 raleway">
      <Header />
      <Outlet />
      <Footer />
      <SettingDrop />
    </div>
  );
};

export default Root;
