import { MdOutlineRule } from "react-icons/md";
import RulesModal from "../../components/BeaDonorComs/RulesModal";

const BeADonor = () => {
  return (
    <>
      <RulesModal />
      <div className="max-w-4xl mx-auto mt-8">
        <div className="card bg-gray-400 p-10">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Be a donor</p>
            <div className="flex items-center gap-3">
              <button
                className="btn btn-ghost flex tooltip"
                data-tip="Rules"
                onClick={() =>
                  document.getElementById("rules_modal").showModal()
                }
              >
                <MdOutlineRule className="text-lg" />
              </button>
            </div>
          </div>
          <form className="flex flex-col gap-5 mt-6">
            <div className="grid grid-cols-2 gap-5 w-full">
              <input type="file" className="file-input file-input-ghost" />
            </div>
            <div className="grid grid-cols-2 gap-5 w-full">
              <input
                type="text"
                className="input input-bordered"
                placeholder="Write your name"
              />
              <select id="blood-group" name="blood-group" className="select">
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
            </div>
            <div className="grid grid-cols-2 gap-5 w-full">
              <input
                type="text"
                className="input input-bordered"
                placeholder="Write your email"
              />
              <input
                type="text"
                className="input input-bordered"
                placeholder="Write your phone"
              />
            </div>
            <div className="grid grid-cols-2 gap-5 w-full">
              <input
                type="date"
                className="input input-bordered"
                placeholder="Write your email"
              />
              <select id="gender" name="gender" className="select">
                <option disabled selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox"
                id="consent"
                required
              />
              <label htmlFor="consent" className="font-semibold text-sm">
                I agree to donate blood and confirm that I am eligible:
              </label>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-xs font-semibold text-gray-600 my-4 ml-1">
                By submitting this form, you agree to our terms of service and
                privacy policy.
              </p>
              <button className="btn btn-neutral px-8" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BeADonor;
