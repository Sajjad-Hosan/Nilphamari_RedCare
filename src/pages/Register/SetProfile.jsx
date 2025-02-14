import { useEffect, useState } from "react";
import { FaArrowRightToBracket, FaRegCircleCheck } from "react-icons/fa6";
import {
  GrContactInfo,
  GrFormNextLink,
  GrFormPreviousLink,
} from "react-icons/gr";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useImage from "../../hooks/useImage";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const timelineObj = [
  { tab: 0, name: "register" },
  { tab: 1, name: "donate_from" },
  { tab: 2, name: "profile_setup" },
];

const SetProfile = () => {
  const { register, handleSubmit } = useForm();
  const { imageUrl, handleImageData } = useImage();

  const { user, mgUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [activeTab, setActiveTab] = useState(0);
  const { displayName, email, reloadUserInfo, metadata } = user;
  const {
    _id,
    role,
    name,
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
    isDonor,
    about,
    address,
    bloodGroup,
    age,
    city,
    district,
    donation_related_info,
    phone,
    photoURL,
    userName,
    weight,
  } = mgUser;

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

  const handleDonor = async (e) => {
    const img = e.image[0];
    console.log(e.image[0]);
    handleImageData(img);
    if (!imageUrl) {
      return console.log("something went wrong!");
    }
    const donor = {
      photoURL: imageUrl,
      _id: mgUser._id,
      userName: e.userName,
      email: user.email,
      bloodGroup: e.blood_group,
      phone: e.phone,
      city: e.city,
      address: e.address,
      district: e.district,
      weight: e.weight,
      age: e.age,
      about: e.about,
      donation_related_info: e.donation_related_info,
    };
    updateProfile(user, {
      photoURL: imageUrl,
    }).then(async () => {
      const res = await axiosPublic.patch("/new-donor", donor);
      console.log(res.data);
      handleNext();
    });
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
                  <p className="text-md font-semibold mt-1">{displayName}</p>
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="" className="text-xl">
                    Email:{" "}
                  </label>
                  <p className="text-md font-semibold mt-1">{email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="" className="text-xl">
                    Password:{" "}
                  </label>
                  <p className="text-md font-semibold mt-1">
                    {reloadUserInfo?.passwordHash}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="" className="text-xl">
                    Creation time:{" "}
                  </label>
                  <p className="text-md font-semibold mt-1">
                    {metadata?.creationTime}
                  </p>
                </div>
                {/* <div className="flex items-center gap-3">
                  <label htmlFor="" className="text-xl">
                    Create date:{" "}
                  </label>
                  <p className="text-md font-semibold mt-1">
                    {metadata.creationTime}
                  </p>
                </div> */}
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
              <form
                action=""
                className="flex flex-col gap-3 mt-8"
                onSubmit={handleSubmit(handleDonor)}
              >
                <input
                  type="file"
                  name=""
                  id=""
                  className="file-input"
                  {...register("image")}
                />
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Username"
                    {...register("userName")}
                  />
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Address"
                    {...register("address")}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="City"
                    {...register("city")}
                  />
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="District"
                    {...register("district")}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Age"
                    {...register("age")}
                  />
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Weight"
                    {...register("weight")}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <select
                    id="blood-group"
                    name="blood-group"
                    className="select"
                    {...register("blood_group")}
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
                    {...register("phone")}
                  />
                </div>
                <textarea
                  name=""
                  id=""
                  className="textarea w-full"
                  placeholder="About you"
                  {...register("about")}
                ></textarea>
                <textarea
                  name=""
                  id=""
                  className="textarea w-full"
                  placeholder="Donation related any information"
                  {...register("donation_related_info")}
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
                    // onClick={handleNext}
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
                  src={photoURL}
                  alt={name}
                  className="avatar rounded-full border border-gray-300 object-contain"
                  width={250}
                />
                <div className="mt-6 p-6 text-left w-full">
                  <p className="text-2xl font-semibold">{name}</p>
                  <p className="text-md font-normal text-gray-400">
                    {userName}
                  </p>
                  <div className="mt-8">
                    <p className="font-semibold">Email: {email}</p>
                    <p className="font-semibold">Phone: {phone}</p>
                    <p className="font-semibold">Blood Group: {bloodGroup}</p>
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
