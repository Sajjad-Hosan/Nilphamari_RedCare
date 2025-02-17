import { GrFormView } from "react-icons/gr";
import { LuMessageCircle, LuSend, LuUserRoundSearch } from "react-icons/lu";
import {
  MdOutlineAlternateEmail,
  MdOutlineContacts,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ data, border = "gray", type }) => {
  const {
    _id,
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
    <>
      <div
        className={`card flex-row gap-2 border border-dashed border-${border}-400 p-10 transition-all duration-100 cursor-pointer hover:scale-95 shadow relative ${
          type === "need" ? "hover:bg-orange-400" : "hover:bg-gray-400"
        }`}
      >
        <div className="avatar w-24 rounded-full overflow-hidden">
          <img src={photoURL} alt={name} />
        </div>
        <div className="flex flex-col gap-1 p-6">
          {type === "need" ? (
            " "
          ) : (
            <h1 className="text-xl font-semibold">{name}</h1>
          )}
          <p className="text-sm text-gray-700 font-semibold">
            Blood Group: {bloodGroup}
          </p>
          <p className="text-sm text-gray-700 font-semibold">
            Location: {address}
          </p>
          {type === "need" ? (
            <p className="text-sm text-gray-700 font-semibold">
              Contact: {phone}
            </p>
          ) : (
            ""
          )}
          <div className="flex justify-end gap-3 absolute right-5 bottom-2">
            {type === "need" ? (
              <>
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
                      <p className="text-xs font-semibold mb-5">
                        Contact information
                      </p>
                      <div className="space-y-3 px-1">
                        <p className="text-sm font-semibold flex items-center gap-1">
                          <LuUserRoundSearch className="text-xl" /> {userName}
                        </p>
                        <p className="text-sm font-semibold flex items-center gap-1">
                          <MdOutlineAlternateEmail className="text-xl" />{" "}
                          {email}
                        </p>
                        <p className="text-xs font-semibold flex items-center gap-1 capitalize">
                          <MdOutlineLocationOn className="text-xl" /> {address}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
                <button
                  className="btn btn-ghost btn-circle flex tooltip"
                  data-tip="Request Send"
                  onClick={() =>
                    document.getElementById("request_modal").showModal()
                  }
                >
                  <LuSend className="text-lg" />
                </button>
              </>
            ) : (
              <>
                <Link
                  to={`/profile-view/${_id}`}
                  className="btn btn-ghost btn-circle flex tooltip"
                  data-tip="View"
                >
                  <GrFormView className="text-lg" />
                </Link>
                <button
                  className="btn btn-ghost btn-circle flex tooltip"
                  data-tip="Message"
                >
                  <LuMessageCircle className="text-lg" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
