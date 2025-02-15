import { FaUsersRays } from "react-icons/fa6";

const EmptyCard = ({ heading = "No Users available" }) => {
  return (
    <>
      <div className="card p-20 border items-center mx-auto mt-14">
        <FaUsersRays className="text-4xl" />
        <h2 className="text-2xl font-semibold mt-2 capitalize">{heading}</h2>
        <p className="text-xs text-center font-semibold mt-1">
          No users are available at the moment. Please check back later or
          invite others to join.
        </p>
      </div>
    </>
  );
};
export default EmptyCard;
