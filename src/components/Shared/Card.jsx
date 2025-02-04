import { GrFormView } from "react-icons/gr";
import { LuMessageCircle, LuSend } from "react-icons/lu";
import { MdOutlineContacts } from "react-icons/md";

const Card = ({ i, border = "gray", type }) => (
  <>
    <div
      key={i}
      className={`card flex-row gap-2 border border-dashed border-${border}-400 p-10 transition-all duration-100 cursor-pointer hover:scale-95 shadow relative ${
        type === "need" ? "hover:bg-orange-400" : "hover:bg-gray-400"
      }`}
    >
      <div className="avatar w-24 rounded-full overflow-hidden">
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/kvlaaa80/poster/c/5/e/medium-anime-boy-cool-anime-well-made-matte-finish-poster-original-imag8gayfhwhyuab.jpeg?q=90&crop=false"
          alt="Shoes"
        />
      </div>
      <div className="flex flex-col gap-1 p-6">
        {type === "need" ? (
          " "
        ) : (
          <h1 className="text-xl font-semibold">John Doe</h1>
        )}
        <p className="text-sm text-gray-700 font-semibold">Blood Group: A+</p>
        <p className="text-sm text-gray-700 font-semibold">
          Location: Nilphamari
        </p>
        {type === "need" ? (
          <p className="text-sm text-gray-700 font-semibold">
            Contact: 012365849
          </p>
        ) : (
          ""
        )}
        <div className="flex justify-end gap-3 absolute right-5 bottom-2">
          {type === "need" ? (
            <>
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
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  </>
);

export default Card;
