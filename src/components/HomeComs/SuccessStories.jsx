import { FaPersonCircleCheck, FaUsersViewfinder } from "react-icons/fa6";

const SuccessStories = () => {
  const stories = [
    {
      name: "Rahim Uddin",
      story:
        "আমি এই প্ল্যাটফর্ম থেকে খুব দ্রুত একজন রক্তদাতা খুঁজে পেয়েছি। ধন্যবাদ!",
      location: "ঢাকা",
      date: "২০২১-০৭-২০",
    },
    {
      name: "Mithila Ahmed",
      story:
        "জরুরি সময়ে রক্তদাতা পেয়েছি। এটি সত্যিই জীবন বাঁচানোর প্ল্যাটফর্ম।",
      location: "চট্টগ্রাম",
      date: "২০২১-০৭-২০",
    },
    {
      name: "Rahim Uddin",
      story:
        "আমি এই প্ল্যাটফর্ম থেকে খুব দ্রুত একজন রক্তদাতা খুঁজে পেয়েছি। ধন্যবাদ!",
      location: "ঢাকা",
      date: "২০২১-০৭-২০",
    },
    {
      name: "Mithila Ahmed",
      story:
        "জরুরি সময়ে রক্তদাতা পেয়েছি। এটি সত্যিই জীবন বাঁচানোর প্ল্যাটফর্ম।",
      location: "চট্টগ্রাম",
      date: "২০২১-০৭-২০",
    },
    {
      name: "Rahim Uddin",
      story:
        "আমি এই প্ল্যাটফর্ম থেকে খুব দ্রুত একজন রক্তদাতা খুঁজে পেয়েছি। ধন্যবাদ!",
      location: "ঢাকা",
      date: "২০২১-০৭-২০",
    },
    {
      name: "Mithila Ahmed",
      story:
        "জরুরি সময়ে রক্তদাতা পেয়েছি। এটি সত্যিই জীবন বাঁচানোর প্ল্যাটফর্ম।",
      location: "চট্টগ্রাম",
      date: "২০২১-০৭-২০",
    },
  ];

  return (
    <div className="container mx-auto p-6 mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Blood donation story
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {stories.map((item, index) => (
          <div
            key={index}
            className="card border border-gray-200 p-6 rounded-lg transition-all duration-100 hover:scale-95 cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <img
                src="https://rukminim2.flixcart.com/image/850/1000/kvlaaa80/poster/c/5/e/medium-anime-boy-cool-anime-well-made-matte-finish-poster-original-imag8gayfhwhyuab.jpeg?q=90&crop=false"
                alt=""
                width={60}
                className="avatar rounded-full mb-1"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm font-semibold">Blood Group: A+</p>
              </div>
            </div>
            <p className="text-gray-900 mt-2">{item.story}</p>
            <div className="flex justify-between items-center mt-5">
              <p className="text-sm text-gray-800 mt-2">📍 {item.location}</p>
              <p className="text-sm text-gray-800 mt-2">📍 {item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs font-semibold text-right mt-4">Stories 100 of 08 showing</p>
      <div className="mt-10 flex justify-end gap-5">
        <button
          className="btn btn-neutral flex px-8 tooltip"
          data-tip=" See more stories"
        >
          <FaUsersViewfinder className="text-lg" />
        </button>
        <button
          className="btn btn-neutral flex px-8 tooltip"
          data-tip="Be a donor"
        >
          <FaPersonCircleCheck className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
