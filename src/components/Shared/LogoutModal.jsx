import { IoClose } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { TiInfoOutline } from "react-icons/ti";

const LogoutModal = () => {
  const handleLogout = () => {
    localStorage.setItem("showWelcomeAlert", "true");
  };
  return (
    <>
      <dialog id="logout_modal" className="modal">
        <div className="modal-box">
          <div className=" card items-center gap-4 p-10">
            <TiInfoOutline className="text-4xl" />
            <span className="font-semibold">
              Are you sure you want to Logout
            </span>
            <div className="flex items-center gap-3">
              <form method="dialog">
                <button className="btn btn-sm btn-warning">
                  <IoClose className="text-lg" /> Deny
                </button>
              </form>
              <button className="btn btn-sm btn-neutral px-4">
                <TbLogout2 className="text-lg" /> Logout
              </button>
            </div>
          </div>
        </div>
      </dialog>
      ;
    </>
  );
};

export default LogoutModal;
