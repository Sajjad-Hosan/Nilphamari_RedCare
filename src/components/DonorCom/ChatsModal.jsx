import { FaXmark } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const ChatBox = ({ position, color, data }) => {
  return (
    <div className={`flex justify-${position}`}>
      <div className="card p-2 md:p-4 md:w-1/2 transition-all duration-100">
        {/* user chat box */}
        <p className="text-xs md:text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
          mauris sed sem rutrum commodo. Nulla facilisi. Vestibulum vel nisi vel
          enim scelerisque varius.
        </p>
        <div className="flex items-end justify-end">
          <img
            src="/logo.png"
            alt="User Avatar"
            width={20}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const ChatsModal = ({ chatUser }) => {
  const [messages, setMessages] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { mgUser } = useAuth();
  const today = new Date();

  useEffect(() => {
    axiosPublic
      .get(`/message?userEmail=${mgUser?.email}&chatEmail=${chatUser?.email}`)
      .then((res) => {
        console.log(res.data?.result);
      });
  }, [mgUser.email, axiosPublic, chatUser.email]);

  const handleSenderMessage = (e) => {
    e.preventDefault();

    const data = {
      sender_id: "sa4df4as4dfsad5f4354",
      sender_img: mgUser.photoURl,
      receiver_id: "156sd4sd4dsf4v4dfs65",
      message: e.target.message.value,
      time: today.toLocaleTimeString,
      date: today.toLocaleDateString,
    };
    setMessages([...messages, data]);
    // e.target.reset();
  };
  return (
    <div>
      <dialog className="modal" id="chats_modal">
        <div className="modal-box w-11/12 max-w-5xl h-[90%]">
          <div className="flex items-center justify-between relative">
            <h3 className="font-semibold text-lg">Sajjad Hosan - Chat</h3>
            <form method="dialog">
              <button
                className="btn btn-sm btn-ghost tooltip tooltip-bottom"
                data-tip="Close"
              >
                <FaXmark />
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-between">
            <div className="overflow-scroll overflow-x-clip flex flex-col gap-5 h-[30rem] p-5">
              {messages.map((data, i) => (
                <ChatBox
                  key={i}
                  data={data}
                  position={mgUser._id === data?.sender_id ? "start" : "end"}
                />
              ))}
            </div>
            <div className="fixed w-[95%] bottom-5 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  className="btn btn-sm btn-circle btn-neutral flex tooltip"
                  data-tip="Tooltp"
                >
                  a
                </button>
                <button
                  className="btn btn-sm btn-circle btn-neutral flex tooltip"
                  data-tip="Tooltp"
                >
                  a
                </button>
              </div>
              <form
                className="flex items-center gap-3 w-full"
                onSubmit={handleSenderMessage}
              >
                <input
                  type="text"
                  placeholder="Type a message..."
                  name="message"
                  className="input font-semibold w-full"
                />
                <button type="submit" className="btn btn-neutral px-8">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ChatsModal;
