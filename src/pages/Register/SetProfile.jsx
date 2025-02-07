import { useState } from "react";
import { FaArrowRightToBracket, FaRegCircleCheck } from "react-icons/fa6";
import {
  GrContactInfo,
  GrFormNextLink,
  GrFormPreviousLink,
} from "react-icons/gr";
import { Link } from "react-router-dom";

const timelineObj = [
  { tab: 0, name: "register" },
  { tab: 1, name: "donate_from" },
  { tab: 2, name: "profile_setup" },
];

const SetProfile = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    if (activeTab < timelineObj.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrev = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">
      {/* Timeline UI */}
      <div className="card">
        <ul className="timeline">
          {timelineObj.map((item, index) => (
            <li key={index} className="w-[20rem]">
              {index !== 0 && (
                <hr className={activeTab >= index ? "bg-neutral" : ""} />
              )}
              <div
                className={`timeline-start timeline-box font-semibold ${
                  activeTab >= index ? "text-black" : "text-gray-400"
                }`}
              >
                {item.name.replace("_", " ")}
              </div>
              <div className="timeline-middle">
                <FaRegCircleCheck
                  className={`text-lg ${
                    activeTab >= index ? "text-green-500" : "text-gray-400"
                  }`}
                />
              </div>
              {index !== timelineObj.length - 1 && (
                <hr className={activeTab >= index ? "bg-neutral" : ""} />
              )}
            </li>
          ))}
        </ul>

        {/* Render Different Sections Based on Active Tab */}
        <div className="mt-5 p-20 card text-center">
          {activeTab === 0 && (
            <>
              <p className="font-semibold text-lg">Register Details</p>
              <div className="mt-8 space-y-2">
                <div className="flex items-center gap-3">
                  <label htmlFor="" className="text-xl">
                    Name:{" "}
                  </label>
                  <p className="text-md font-semibold mt-1">Md. Sajjad Hosan</p>
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="" className="text-xl">
                    Email:{" "}
                  </label>
                  <p className="text-md font-semibold mt-1">
                    mdsajjadhosan@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="" className="text-xl">
                    Password:{" "}
                  </label>
                  <p className="text-md font-semibold mt-1">******345</p>
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="" className="text-xl">
                    Create time:{" "}
                  </label>
                  <p className="text-md font-semibold mt-1">12:01:05 am</p>
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="" className="text-xl">
                    Create date:{" "}
                  </label>
                  <p className="text-md font-semibold mt-1">12 Jun, 2025</p>
                </div>
              </div>
              <div className="flex justify-end items-center gap-4 mt-10">
                <button
                  className={`btn btn-neutral px-6 ${
                    activeTab === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handlePrev}
                  disabled={activeTab === 0}
                >
                  <GrFormPreviousLink className="text-lg" />
                  Prev
                </button>
                <button
                  className={`btn btn-neutral px-6 ${
                    activeTab === timelineObj.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleNext}
                  disabled={activeTab === timelineObj.length - 1}
                >
                  Next
                  <GrFormNextLink className="text-lg" />
                </button>
              </div>
            </>
          )}

          {activeTab === 1 && (
            <>
              <p className="font-semibold text-xl">Donor Form</p>
              <form action="" className="flex flex-col gap-3 mt-8">
                <input type="file" name="" id="" className="file-input" />
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Username"
                  />
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Address"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="District"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Age"
                  />
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Weight"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <select
                    id="blood-group"
                    name="blood-group"
                    className="select"
                  >
                    <option selected disabled>
                      Choose blood group
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
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Phone +880"
                  />
                </div>
                <textarea
                  name=""
                  id=""
                  className="textarea w-full"
                  placeholder="About you"
                ></textarea>
                <textarea
                  name=""
                  id=""
                  className="textarea w-full"
                  placeholder="Donation related any information"
                ></textarea>
                <div className="mt-6 flex justify-end items-center gap-3">
                  <button
                    className={`btn btn-neutral px-6 ${
                      activeTab === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handlePrev}
                    disabled={activeTab === 0}
                  >
                    <GrFormPreviousLink className="text-lg" />
                    Prev
                  </button>
                  <button
                    // className="btn btn-neutral px-6"
                    type="submit"
                    className={`btn btn-neutral px-6 ${
                      activeTab === timelineObj.length - 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={handleNext}
                    disabled={activeTab === timelineObj.length - 1}
                  >
                    <GrContactInfo className="text-lg" />
                    Save Changes
                  </button>
                </div>
              </form>
            </>
          )}

          {activeTab === 2 && (
            <>
              <p className="font-semibold text-xl">Profile Setup</p>
              <div className="flex gap-3 mt-6">
                <img
                  src="https://rukminim2.flixcart.com/image/850/1000/kvlaaa80/poster/c/5/e/medium-anime-boy-cool-anime-well-made-matte-finish-poster-original-imag8gayfhwhyuab.jpeg?q=90&crop=false"
                  alt=""
                  className="avatar rounded-full border border-gray-300 object-contain"
                  width={250}
                />
                <div className="mt-6 p-6 text-left w-full">
                  <p className="text-2xl font-semibold">Md. Sajjad Hosan</p>
                  <p className="text-md font-normal text-gray-400">
                    sajjad0hosan
                  </p>
                  <div className="mt-8">
                    <p className="font-semibold">
                      Email: sajjadhosan@gmail.com
                    </p>
                    <p className="font-semibold">Phone: +88011254585</p>
                    <p className="font-semibold">Blood Group: A+</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 justify-end w-full">
                <Link to={"/"} className="btn btn-neutral px-8">
                  Let's go
                  <FaArrowRightToBracket className="text-lg mt-1" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SetProfile;
