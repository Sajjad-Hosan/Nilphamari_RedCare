import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SettingDrop from "../../components/SettingDrop/SettingDrop";
import LogoutModal from "../../components/Shared/LogoutModal";
import WelcomeAlert from "../../components/Shared/WelcomeAlert";
import { ToastContainer } from "react-toastify";
import NoticeModal from "../../components/Shared/NoticeModal";
import { TbUserCode } from "react-icons/tb";
const Root = () => {
  return (
    <div className="px-4 pt-2 raleway">
      <Header />
      <Outlet />
      <Footer />
      <SettingDrop />
      {/*  */}
      <NoticeModal />
      <WelcomeAlert />
      <LogoutModal />
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        theme="light"
        closeButton={false}
      />
      <div className="fixed right-5 bottom-20">
        <button
          onClick={() => document.getElementById("notice_modal").showModal()}
          className="btn btn-neutral btn-circle flex tooltip tooltip-left"
          data-tip="About Developer"
        >
          <TbUserCode className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Root;
