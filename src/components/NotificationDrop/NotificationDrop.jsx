import { FaRegCircleCheck } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdRefresh } from "react-icons/md";
import { TbBellCog } from "react-icons/tb";

const NotiOptions = () => {
  return (
    <>
      <button
        className="btn btn-sm btn-ghost"
        popoverTarget="popover-2"
        style={{ anchorName: "--anchor-2" } /* as React.CSSProperties */}
      >
        <HiOutlineDotsHorizontal className="text-lg" />
      </button>

      <div
        className="dropdown menu w-52 rounded-box bg-gray-200 p-4"
        popover="auto"
        id="popover-2"
        style={{ positionAnchor: "--anchor-2" } /* as React.CSSProperties */}
      >
        <li>
          <a>
            <MdRefresh className="text-lg" /> Refresh
          </a>
        </li>
        <li>
          <a>
            <FaRegCircleCheck className="text-sm" /> Mark as all read
          </a>
        </li>
        <li>
          <a>
            <TbBellCog className="text-sm" />
            Notification Setting
          </a>
        </li>
      </div>
    </>
  );
};

const NotificationDrop = () => {
  return (
    <div>
      <button
        className="btn btn-ghost btn-circle flex tooltip tooltip-bottom"
        data-tip='Notifications'
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
      >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />{" "}
          </svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>

      <div
        className="dropdown dropdown-bottom dropdown-left w-[25rem] rounded-box bg-gray-300 mt-2 card p-6"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
      >
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold flex items-center gap-2">
            <GoBell className="text-xl" /> Notifications
          </p>
          <NotiOptions />
        </div>
        <div className="overflow-scroll flex flex-col gap-3 h-[20rem] mt-4">
          {[...Array(19).keys()].map((i) => (
            <div key={i} className="p-3 card transition-all duration-250 hover:bg-gray-400 cursor-pointer">
              <div className="flex justify-between">
                <h3 className="text-sm font-semibold">
                  New message from John Doe
                </h3>
                <span className="text-gray-500 text-xs">5 minutes ago</span>
              </div>
              <p className="text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationDrop;
