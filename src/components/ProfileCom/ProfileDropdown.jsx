import { RiUserSettingsLine } from "react-icons/ri";

const ProfileDropdown = () => {
  return (
    <>
      <button
        className="btn btn-circle btn-ghost"
        popoverTarget="popover-4"
        style={{ anchorName: "--anchor-4" } /* as React.CSSProperties */}
      >
        <RiUserSettingsLine className="text-lg" />
      </button>

      <div
        className="dropdown dropdown-left dropdown-bottom mt-4 w-52 menu p-4 rounded-box bg-gray-300"
        popover="auto"
        id="popover-4"
        style={{ positionAnchor: "--anchor-4" } /* as React.CSSProperties */}
      >
        <p className="text-xs font-semibold mb-2">Account setting</p>
        <li>
          <a>Profile info</a>
        </li>
        <li>
          <a>Account privacy</a>
        </li>
        <li>
          <a>Account logs</a>
        </li>
      </div>
    </>
  );
};

export default ProfileDropdown;
