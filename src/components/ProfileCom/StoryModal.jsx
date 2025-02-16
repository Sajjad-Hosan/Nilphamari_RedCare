import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const StoryModal = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const handleStory = async (e) => {
    const data = {
      name: user.displayName,
      email: user.email,
      story_title: e.story_title,
      story_content: e.story_content,
      story_date: new Date().toLocaleDateString,
      story_time: new Date().toLocaleTimeString,
      story_views: 0,
    };

    const res = await axiosPublic.post("/story-add", data);
    console.log(res.data.message);
    if (res.data) {
      reset();
    }
  };
  return (
    <>
      <dialog id="story_modal" className="modal">
        <div className="modal-box w-11/12 max-w-3xl h-[75%]">
          <div className="p-5 w-full">
            <form
              className="flex flex-col gap-3 w-full form"
              onSubmit={handleSubmit(handleStory)}
            >
              <h2 className="text-xl font-semibold mb-10">Success Story</h2>
              <label className="text-xs font-semibold">Title</label>
              <input
                type="text"
                placeholder="Enter your story title"
                className="input w-full"
                {...register("story_title", { required: true })}
              />
              <label className="text-xs font-semibold">Story</label>
              <textarea
                placeholder="Write your story here"
                className="textarea w-full"
                {...register("story_content", { required: true })}
              ></textarea>
              <button
                className="btn btn-neutral px-8 mx-auto mt-5"
                type="submit"
              >
                Publish
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error px-6">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default StoryModal;
