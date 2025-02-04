import { useEffect, useState } from "react";
import { BiCustomize } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";
import { GrFormView } from "react-icons/gr";
import { IoRefresh } from "react-icons/io5";
import { LuMessageCircle, LuSend } from "react-icons/lu";
import { MdOutlineContacts } from "react-icons/md";

const Donors = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate delay for loading data
  }, []);
  return (
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
          >
            <BsPersonPlus className="text-lg" />
          </button>
          <button
            className="btn btn-circle btn-ghost flex tooltip"
            data-tip="Page View"
          >
            <BiCustomize className="text-lg" />
          </button>
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
        <div className="grid grid-cols-2 gap-5">
          {[...Array(10).keys()].map((i) => (
            <div
              key={i}
              className="p-10 card flex-row items-center gap-5 bg-gray-200 relative"
            >
              <div className="badge badge-neutral absolute top-5 right-5 font-semibold">
                Active
              </div>
              <div className="flex flex-col gap-3">
                <img
                  src="https://rukminim2.flixcart.com/image/850/1000/kvlaaa80/poster/c/5/e/medium-anime-boy-cool-anime-well-made-matte-finish-poster-original-imag8gayfhwhyuab.jpeg?q=90&crop=false"
                  alt=""
                  width={150}
                  className="avatar rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Donor Name</h3>
                <span className="text-sm text-gray-700">Blood Group: A+</span>
                <p className="text-sm text-gray-700">Location: Nilphamari</p>
                <p className="text-sm text-gray-700">
                  Last Donated: 2022-01-15
                </p>
              </div>
              <div className="flex items-center gap-3 absolute right-4 bottom-3">
                <button
                  className="btn btn-ghost btn-circle flex tooltip"
                  data-tip="View"
                >
                  <GrFormView className="text-lg" />
                </button>
                <button
                  className="btn btn-ghost btn-circle flex tooltip"
                  data-tip="Message"
                >
                  <LuMessageCircle className="text-lg" />
                </button>
                <button
                  className="btn btn-ghost btn-circle flex tooltip"
                  data-tip="Contact"
                >
                  <MdOutlineContacts className="text-lg" />
                </button>
                <button
                  className="btn btn-ghost btn-circle flex tooltip"
                  data-tip="Request Send"
                >
                  <LuSend className="text-lg" />
                </button>
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default Donors;
