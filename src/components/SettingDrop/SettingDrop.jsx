import { BsGear } from "react-icons/bs";
import { TbHash } from "react-icons/tb";

const SettingDrop = () => {
  return (
    <>
      {/* change popover-1 and --acnhor-1 names. Use unique names for each dropdown */}
      {/* For TSX uncomment the commented types below */}
      <button
        className="btn btn-circle btn-neutral flex tooltip tooltip-left fixed bottom-5 right-5"
        data-tip="Setting"
        popoverTarget="popover-3"
        style={{ anchorName: "--anchor-3" } /* as React.CSSProperties */}
      >
        <BsGear className="text-lg" />
      </button>

      <div
        className="dropdown dropdown-left dropdown-top rounded-box bg-gray-300 p-6"
        popover="auto"
        id="popover-3"
        style={{ positionAnchor: "--anchor-3" } /* as React.CSSProperties */}
      >
        <p className="text-xs font-semibold mb-4">Setting box</p>
        <p className="text-center font-semibold text-sm">
          <TbHash className="text-4xl mx-auto mb-2" />
          Working on it. Please wait some day.
        </p>
      </div>
    </>
  );
};

export default SettingDrop;
