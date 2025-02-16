import { useEffect, useState } from "react";
import { BiCustomize } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";
import { GrFormView } from "react-icons/gr";
import { IoRefresh } from "react-icons/io5";
import { LuMessageCircle, LuSend } from "react-icons/lu";
import { MdOutlineContacts, MdOutlineLocationOn } from "react-icons/md";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import ViewDropDown from "../../components/DonorCom/ViewDropDown";
import useDonors from "../../hooks/useDonors";
import { Link } from "react-router-dom";
import ChatsModal from "../../components/DonorCom/ChatsModal";
import useAuth from "../../hooks/useAuth";
import RequestModal from "../../components/DonorCom/RequestModal";

const DonorCard = ({ data, setChatUser }) => {
  const { user } = useAuth();
  const {
    _id,
    name,
    email,
    isDonor,
    about,
    address,
    age,
    bloodGroup,
    city,
    district,
    donation_related_info,
    phone,
    photoURL,
    userName,
    weight,
  } = data;
  return (
    <div
      className={`p-10 card flex-row items-center gap-5 bg-gray-200 relative ${
        user.email === email && "hidden"
      }`}
    >
      <button
        className={`badge capitalize px-5 py-4 absolute top-5 right-5 font-semibold ${
          isDonor ? "badge-neutral" : "badge-accent"
        }`}
      >
        {isDonor ? "available" : "unAvailable"}
      </button>
      <div className="flex flex-col gap-3">
        <img
          src={photoURL}
          alt={name}
          width={150}
          className="avatar rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="text-sm text-gray-700">Blood Group: {bloodGroup}</span>
        <p className="text-sm text-gray-700">Location: {address}</p>
        <p className="text-sm text-gray-700">Last Donated: 0000-00-00</p>
      </div>
      <div className="flex items-center gap-3 absolute right-4 bottom-3">
        <Link
          to={`/profile-view/${_id}`}
          className="btn btn-ghost btn-circle flex tooltip"
          data-tip="View"
        >
          <GrFormView className="text-lg" />
        </Link>
        <button
          onClick={() => {
            document.getElementById("chats_modal").showModal(),
              setChatUser(data);
          }}
          className="btn btn-ghost btn-circle flex tooltip"
          data-tip="Message"
        >
          <LuMessageCircle className="text-lg" />
        </button>
        <>
          <div className="dropdown dropdown-top dropdown-left">
            <div
              className="btn btn-ghost btn-circle flex tooltip"
              tabIndex={0}
              role="button"
              data-tip="Contact"
            >
              <MdOutlineContacts className="text-lg" />
            </div>
            <div
              tabIndex={0}
              className="dropdown-content p-5 bg-base-100 rounded-box z-10 w-52 shadow-sm"
            >
              <p className="text-xs font-semibold mb-5">Contact information</p>
              <div className="space-y-3">
                <p className="text-xs font-semibold flex items-center gap-1">
                  <MdOutlineLocationOn className="text-xl" /> {"address"}
                </p>
                <p className="text-xs font-semibold flex items-center gap-1">
                  <MdOutlineLocationOn className="text-xl" /> {"address"}
                </p>
                <p className="text-xs font-semibold flex items-center gap-1">
                  <MdOutlineLocationOn className="text-xl" /> {"address"}
                </p>
                <p className="text-xs font-semibold flex items-center gap-1">
                  <MdOutlineLocationOn className="text-xl" /> {"address"}
                </p>
              </div>
            </div>
          </div>
        </>
        <button
          className="btn btn-ghost btn-circle flex tooltip"
          data-tip="Request Send"
          onClick={() => document.getElementById("request_modal").showModal()}
        >
          <LuSend className="text-lg" />
        </button>
      </div>
    </div>
  );
};

const Donors = () => {
  const { donors } = useDonors();
  const isDonor = true;
  const [loading, setLoading] = useState(false);
  const [chatUser, setChatUser] = useState("");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate delay for loading data
  }, []);

  return (
    <>
      <ChatsModal chatUser={chatUser} />
      <RequestModal />
      {/*  */}
      <div className="px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-semibold">Donors</h2>
          <div className="flex items-center gap-4">
            <button
              className="btn btn-circle btn-ghost flex tooltip"
              data-tip="Refresh"
            >
              <IoRefresh className="text-lg" />
            </button>
            <button
              className="btn btn-circle btn-ghost flex tooltip"
              data-tip="New Donor"
              disabled={isDonor}
            >
              <BsPersonPlus className="text-lg" />
            </button>
            <ViewDropDown />
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <label className="input rounded-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search here" />
          </label>
          <div className="flex items-center gap-3">
            <select id="blood-group" name="blood-group" className="select">
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

            <select className="select">
              <option disabled={true}>Sort by</option>
              <option>Name</option>
              <option>Blood</option>
              <option>Age</option>
              <option>Added</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="mt-10">
          {donors.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-5">
                {donors.map((info, i) => (
                  <DonorCard key={i} data={info} setChatUser={setChatUser} />
                ))}
              </div>
              <div className="flex items-center justify-center mt-16">
                <button
                  className="btn btn-neutral px-8"
                  onClick={() => setLoading(!loading)}
                >
                  {loading ? (
                    <span className="loading loading-dots loading-xs"></span>
                  ) : (
                    "Load More"
                  )}
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center">
              <EmptyCard />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Donors;
