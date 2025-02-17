import { useState } from "react";
import { LuVideo } from "react-icons/lu";

const RequestModal = () => {
  const [req, setReq] = useState(false);
  const handleReq = () => {};
  return (
    <>
      <dialog id="request_modal" className="modal">
        <div className="modal-box w-11/12 max-w-lg">
          <div className="flex flex-col items-center justify-center gap-3 p-9">
            <LuVideo className="text-5xl" />
            <h3 className="font-bold text-lg">Request for Blood Donate</h3>
            <p className="text-xs font-semibold text-gray-700 text-center">
              You are about to send a blood donation request. The recipient will
              be notified immediately.
            </p>
          </div>
          <div className="flex justify-end gap-3 mt-3">
            <button
              className="btn btn-neutral px-8"
              onClick={() => setReq(true)}
            >
              Request For Call
            </button>
            <form method="dialog">
              <button className="btn btn-error">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default RequestModal;
