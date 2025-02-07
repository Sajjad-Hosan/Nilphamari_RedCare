import { MdOutlinePersonSearch } from "react-icons/md";
import Card from "../Shared/Card";
import EmptyCard from "../EmptyCard/EmptyCard";

const DonationNeeds = () => {
  const arrays = [...Array(0).keys()];
  return (
    <div className="px-4 mt-10">
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Donation Needs</h1>
          <p className="text-sm text-gray-500">
            Blood groups that are in urgent need
          </p>
        </div>
        <div className="flex items-center gap-2">
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {arrays.map((i) => (
              <Card key={i} i={i} border="orange" type="need" />
            ))}
          </div>
        ) : (
          <EmptyCard />
        )}
        <div className="mt-10 flex justify-end gap-5">
          <button
            className="btn btn-neutral px-8"
            disabled={arrays.length < 0 ? false : true}
          >
            <MdOutlinePersonSearch className="text-lg" /> View all donors
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationNeeds;
