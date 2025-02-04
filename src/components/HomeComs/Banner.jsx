import { BiDonateBlood } from "react-icons/bi";
import { FaUsersViewfinder } from "react-icons/fa6";
import QuickFindModal from "./QuickFindModal";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <QuickFindModal />
      <div className="hero bg-base-100 h-[35rem]">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-semibold">Assalamu Alaikum,</h1>
            <p className="mt-5">
              Welcome to{" "}
              <span className="text-bold text-orange-500 text-xl">
                Nilphamari VeinLink
              </span>
              . Where you can <span className="text-orange-500">easily</span>{" "}
              find blood donors in{" "}
              <span className="text-bold text-orange-500 text-lg">
                Nilphamari
              </span>{" "}
              during emergencies. Join the cause by donating blood and making a
              life-saving impact. Use our platform to connect donors with those
              in urgent need and be a part of this humanitarian mission.
            </p>
            <p className="mt-3 font-semibold text-lg dancing text-orange-500">
              Nilphamari VeinLink – Connecting Lives, Saving Lives
            </p>

            <div className="flex justify-end items-center gap-3 mt-10">
              <button
                className="btn btn-neutral"
                onClick={() =>
                  document.getElementById("quickFind_modal").showModal()
                }
              >
                Quick Find Donors <FaUsersViewfinder className="text-lg" />
              </button>
              <Link to={"/new-donor"} className="btn btn-outline ">
                Be a Donor <BiDonateBlood className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
