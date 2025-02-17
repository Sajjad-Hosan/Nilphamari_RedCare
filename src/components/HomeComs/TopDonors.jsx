import { FaUsersViewfinder } from "react-icons/fa6";
import Card from "../Shared/Card";
import EmptyCard from "../EmptyCard/EmptyCard";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const TopDonors = () => {
  const arrays = [...Array(0).keys()];
  const { mgUser } = useAuth();
  return (
    <div className="flex flex-col gap-3 p-6 mt-24">
      <div className="flex justify-between items-center gap-2 px-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Top Donors</h1>
          <p className="text-sm text-gray-500">
            Top donors who have saved lives
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select defaultValue="Pick a color" className="select">
            <option disabled={true}>Month View</option>
            <option>1 month ago</option>
            <option>3 month ago</option>
            <option>5 month ago</option>
            <option>7 month ago</option>
            <option disabled>...</option>
          </select>
          <select className="select">
            <option disabled={true}>Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        {arrays.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[...Array(6).keys()].map((i) => (
              <Card i={i} key={i} />
            ))}
          </div>
        ) : (
          <EmptyCard heading="No Top Donors " />
        )}
      </div>
      <div className="mt-10 flex justify-end gap-5">
        <button
          className="btn btn-neutral flex px-8 tooltip"
          data-tip=" View all donors"
          disabled={arrays.length < 0 ? false : true}
        >
          <FaUsersViewfinder className="text-lg" />
        </button>
        <Link
          to={mgUser.isDonor ? "#" : "/new-donor"}
          className="btn btn-neutral flex tooltip px-8"
          data-tip="Be a Donor"
          onClick={() => {
            if (mgUser.isDonor) {
              toast.warn("You are already a donor");
            }
          }}
        >
          <MdOutlineMedicalInformation className="text-lg" />
        </Link>
      </div>
    </div>
  );
};
export default TopDonors;
