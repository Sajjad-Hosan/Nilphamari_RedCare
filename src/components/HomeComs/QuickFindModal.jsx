import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";

const QuickFindModal = () => {
  return (
    <>
      <dialog id="quickFind_modal" className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Quick Find Donor</h3>
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost flex tooltip tooltip-left"
                data-tip="Close"
              >
                <HiXMark className="text-lg" />
              </button>
            </form>
          </div>
          <div>
            <form className="flex flex-col items-center gap-3 mt-4 mb-6 p-6">
              <div className="grid grid-cols-2 gap-2 w-full">
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Search by name"
                />
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Search by location"
                />
              </div>
              <select
                id="blood-group"
                name="blood-group"
                className="select w-full"
              >
                <option selected disabled>
                  Blood Groups
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>

              <div className="flex mt-5 ml-auto">
                <button className="btn btn-warning">
                  <FaMagnifyingGlass className="text-md" /> Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button className="btn btn-neutral btn-sm px-8" disabled>
              Emergency Blood
            </button>
            <button className="btn btn-neutral btn-sm px-8" disabled>
              Camping Blood
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default QuickFindModal;
