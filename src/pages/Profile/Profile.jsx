import { AiOutlineEdit, AiOutlineExport } from "react-icons/ai";
import { BiSolidUserDetail } from "react-icons/bi";
import { LuImagePlus, LuUserRoundSearch } from "react-icons/lu";
import {
  MdOutlineAlternateEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";
import { TbFileExport, TbLogout2 } from "react-icons/tb";
import ProfileDropdown from "../../components/ProfileCom/ProfileDropdown";

const ProfilePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="card p-10 border mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Profile Page</h1>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-ghost btn-circle flex tooltip"
              data-tip="Edit Profile"
            >
              <AiOutlineEdit className="text-lg" />{" "}
            </button>
            <button
              className="btn btn-ghost btn-circle flex tooltip"
              data-tip="Export data"
            >
              <TbFileExport className="text-lg" />
            </button>
            <ProfileDropdown />
          </div>
        </div>
        {/* Profile Info */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="flex items-center gap-4">
            <div className="flex w-full">
              <div className="md:w-1/2 relative">
                <img
                  src="https://rukminim2.flixcart.com/image/850/1000/kvlaaa80/poster/c/5/e/medium-anime-boy-cool-anime-well-made-matte-finish-poster-original-imag8gayfhwhyuab.jpeg?q=90&crop=false"
                  alt="Profile Pic"
                  className="rounded-full w-[250px]"
                />
                <button className="btn btn-sm btn-circle btn-neutral absolute bottom-10 right-5 flex tooltip"
                data-tip='New image'
                >
                  <LuImagePlus className="text-lg" />
                </button>
              </div>
              <div className="ml-4 p-5 w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-2xl font-semibold">John Doe</h3>
                  <div className="badge badge-neutral font-semibold">
                    available
                  </div>
                </div>
                <p className="text-sm text-gray-500">Software Engineer</p>
                <p className=" font-semibold mt-6">Blood : A-positive</p>
                <div className="mt-5 space-y-2">
                  <p className="text-sm font-semibold flex items-center gap-1">
                    <LuUserRoundSearch className="text-xl" /> sajjadhosan
                  </p>
                  <p className="text-sm font-semibold flex items-center gap-1">
                    <MdOutlinePhone className="text-xl" /> +88012345678
                  </p>
                  <p className="text-sm font-semibold flex items-center gap-1">
                    <MdOutlineAlternateEmail className="text-xl" />{" "}
                    sajjad04hosan@gmail.com
                  </p>
                  <p className="text-xs font-semibold flex items-center gap-1">
                    <MdOutlineLocationOn className="text-xl" /> Nilphamari sadar
                  </p>
                  <div className="flex justify-end gap-3 mt-12">
                    <button className="btn btn-sm btn-neutral px-4">
                      <BiSolidUserDetail className="text-lg" /> More about user
                    </button>
                    <button className="btn btn-sm btn-secondary px-4">
                      <TbLogout2 className="text-lg text-orange-400" /> Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
