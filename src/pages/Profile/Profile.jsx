import { AiOutlineEdit } from "react-icons/ai";
import { BiSolidUserDetail } from "react-icons/bi";
import { LuImagePlus, LuUserRoundSearch } from "react-icons/lu";
import {
  MdOutlineAlternateEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";
import { TbBrandStorytel, TbFileExport, TbLogout2 } from "react-icons/tb";
import ProfileDropdown from "../../components/ProfileCom/ProfileDropdown";
import useAuth from "../../hooks/useAuth";
import { FaCheck, FaXmark } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { toast } from "react-toastify";
import MoreAboutModal from "./MoreAboutModal";
import StoryModal from "../../components/ProfileCom/StoryModal";

const ProfilePage = () => {
  const { mgUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    _id,
    role,
    name,
    email,
    password,
    emailVerified,
    creationTime,
    lastSignInTime,
    donates,
    friends,
    posts,
    reacts,
    comments,
    blocks,
    messages,
    bloodGroup,
    isDonor,
    about,
    address,
    age,
    city,
    district,
    donation_related_info,
    phone,
    photoURL,
    userName,
    weight,
  } = mgUser;
  const [donor, setDonor] = useState(isDonor);
  const [count, setCount] = useState(0);

  const handleDonor = async (status) => {
    const res = await axiosPublic.patch(
      `/update?donor=${status}&email=${mgUser?.email}`
    );
    console.log(res.data);
  };

  return (
    <>
      <MoreAboutModal />
      <StoryModal />
      {/*  */}
      <div className="max-w-6xl mx-auto">
        <div className="card p-4 mt-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Profile Information</h1>
            {!isDonor && (
              <div className="alert alert-warning font-semibold">
                Are you want to be a Donor ?
                <div className="flex items-center gap-2">
                  <button
                    className="btn btn-neutral btn-sm px-6"
                    onClick={() => handleDonor(true)}
                  >
                    <FaCheck /> Yes
                  </button>
                  <button
                    className="btn btn-error btn-sm px-6"
                    onClick={() => handleDonor(false)}
                  >
                    <FaXmark /> No
                  </button>
                </div>
              </div>
            )}
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
              {count >= 6 ? (
                <button
                  onClick={() =>
                    document.getElementById("story_modal").showModal()
                  }
                  className="btn btn-ghost btn-circle flex tooltip"
                  data-tip="Add Story"
                >
                  <TbBrandStorytel className="text-lg" />
                </button>
              ) : (
                <button
                  onClick={() =>
                    toast.warning(
                      "You have to at least donated 6 times for use this!"
                    )
                  }
                  className="btn btn-ghost btn-circle flex tooltip"
                  data-tip="Add Story"
                >
                  <TbBrandStorytel className="text-lg" />
                </button>
              )}

              <ProfileDropdown />
            </div>
          </div>
          {/* Profile Info */}
          <div className="mt-20">
            {/* <h2 className="text-xl font-semibold mb-4">Profile Information</h2> */}
            <div className="flex items-center gap-4">
              <div className="flex w-full">
                <div className="md:w-1/2 relative">
                  <img
                    src={photoURL}
                    alt={name}
                    className="rounded-full w-[250px]"
                  />
                  <button className="btn btn-neutral absolute bottom-10 right-5">
                    <LuImagePlus className="text-lg" /> Upload
                  </button>
                </div>
                <div className="ml-4 p-5 w-full">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    <button
                      onClick={() => {
                        setDonor(!donor), toast.warning("status updated!");
                      }}
                      className={`btn btn-sm font-bold capitalize px-6 ${
                        donor ? "btn-neutral" : "btn-accent"
                      }`}
                    >
                      {donor ? "available" : "unAvailable"}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">Unknown</p>
                  <p className=" font-semibold mt-6">Blood : {bloodGroup}</p>
                  <div className="mt-5 space-y-2">
                    <p className="text-sm font-semibold flex items-center gap-1">
                      <LuUserRoundSearch className="text-xl" /> {userName}
                    </p>
                    <p className="text-sm font-semibold flex items-center gap-1">
                      <MdOutlinePhone className="text-xl" /> {phone}
                    </p>
                    <p className="text-sm font-semibold flex items-center gap-1">
                      <MdOutlineAlternateEmail className="text-xl" /> {email}
                    </p>
                    <p className="text-xs font-semibold flex items-center gap-1">
                      <MdOutlineLocationOn className="text-xl" /> {address}
                    </p>
                    <div className="flex justify-end gap-3 mt-12">
                      <button
                        className="btn btn-sm btn-neutral px-4"
                        onClick={() =>
                          document
                            .getElementById("more_about_modal")
                            .showModal()
                        }
                      >
                        <BiSolidUserDetail className="text-lg" /> More about
                        user
                      </button>
                      <button
                        className="btn btn-sm btn-secondary px-4"
                        onClick={() =>
                          document.getElementById("logout_modal").showModal()
                        }
                      >
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
    </>
  );
};

export default ProfilePage;
