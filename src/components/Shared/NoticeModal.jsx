import { useEffect, useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";

const NoticeModal = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const noticeAlert = localStorage.getItem("noticeAlert");

    if (!noticeAlert) {
      localStorage.setItem("noticeAlert", "true");
    }

    if (noticeAlert === "true") {
      document.getElementById("notice_modal").showModal();
    }
  }, []);

  const handleAccept = () => {
    document.getElementById("notice_modal").close();
    localStorage.setItem("noticeAlert", "false");
  };

  return (
    <>
      <dialog id="notice_modal" className="modal">
        <div className="modal-box w-11/12 max-w-xl rounded-lg p-6">
          <div className="text-center space-y-4 p-7">
            {showAlert ? (
              <>
                <h3 className="font-bold text-xl">Important Notice</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Thank you for visiting! I'm currently working on enhancing my
                  portfolio platform to provide the best experience. Some
                  features are still under development, and I appreciate your
                  patience and support. ❤️
                </p>
              </>
            ) : (
              <>
                <h3 className="font-bold text-xl">
                  Welcome to the Blood Donation App!
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We're continuously improving the platform to ensure a smooth
                  and user-friendly experience. Some features are still under
                  development, and we appreciate your patience and support. ❤️
                </p>
              </>
            )}
          </div>

          {/* Modal Action Buttons */}
          <div className="flex justify-between items-center mt-6">
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle flex tooltip"
              data-tip="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle flex tooltip"
              data-tip="LinkedIn"
            >
              <FaLinkedin className="text-lg text-blue-500" />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle flex tooltip"
              data-tip="Twitter"
            >
              <FaTwitter className="text-lg text-sky-500" />
            </a>
            <button
              onClick={() => setShowAlert(!showAlert)}
              className={`btn btn-circle flex tooltip ${
                showAlert ? "btn-neutral" : "btn-ghost"
              }`}
              data-tip="My Portfolio"
            >
              <AiOutlineFundProjectionScreen className="text-lg text-sky-500" />
            </button>
          </div>
            <button className="btn btn-neutral px-6" onClick={handleAccept}>
              Got It!
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default NoticeModal;
