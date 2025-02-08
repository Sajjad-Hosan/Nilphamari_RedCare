import { BiCustomize } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";

const ViewDropDown = () => {
  return (
    <>
      <details className="dropdown dropdown-left dropdown-bottom">
        <summary
          className="btn btn-circle btn-ghost flex tooltip"
          data-tip="Page View"
        >
          <BiCustomize className="text-lg" />
        </summary>
        <div className="mt-4 dropdown-content bg-gray-300 rounded-box z-20 w-52 p-6">
          <p className="text-xs font-semibold">Page card view</p>
          <div className="flex items-center gap-2 mt-3">
            <button
              className="btn btn-sm btn-ghost flex tooltip"
              data-tip="grid view"
            >
              <IoGridOutline className="text-lg" />
            </button>
            <button
              className="btn btn-sm btn-ghost flex tooltip"
              data-tip="list view"
            >
              <CiBoxList className="text-lg" />
            </button>
          </div>
        </div>
      </details>
    </>
  );
};

export default ViewDropDown;
