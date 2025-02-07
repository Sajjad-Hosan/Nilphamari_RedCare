import { AiOutlineHome } from "react-icons/ai";
import { CgLogIn } from "react-icons/cg";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa6";
import { LuKeyRound, LuUserPlus, LuUserRound } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import image from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/set-profile");
  };
  const handleRegister = () => {
    handleNavigate();
  };
  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="card p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold dancing">Register Page</h1>
          <div className="flex items-center gap-3">
            <Link to={"/login"} className="btn btn-neutral">
              <CgLogIn className="text-lg" /> Login
            </Link>
            <Link to={"/"} className="btn btn-neutral">
              <AiOutlineHome className="text-lg" /> Home
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[60%]">
            <img src={image} alt="" className="object-cover" width={550} />
          </div>
          <div className="lg:w-[40%]">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold dancing">Welcome ,</p>
              <p className="text-md font-semibold dancing">
                Ready to start your journey!
              </p>
            </div>
            <div className="mt-5">
              <div className="mt-4 flex items-center gap-4 justify-center">
                <button
                  className="btn btn-ghost flex tooltip"
                  data-tip="Google"
                >
                  <FaGoogle className="text-lg text-green-600" />
                </button>
                <button
                  className="btn btn-ghost flex tooltip"
                  data-tip="Facebook"
                >
                  <FaFacebook className="text-lg text-blue-600" />
                </button>
                <button
                  className="btn btn-ghost flex tooltip"
                  data-tip="Github"
                >
                  <FaGithub className="text-lg text-black" />
                </button>
                <button
                  className="btn btn-ghost flex tooltip"
                  data-tip="Twitter"
                >
                  <FaTwitter className="text-lg text-blue-500" />
                </button>
              </div>
              <p className="text-center text-sm font-semibold my-8">
                or Register with
              </p>
              <form
                className="mt-8 flex flex-col gap-2"
                onSubmit={handleRegister}
              >
                <label className="input validator w-full">
                  <LuUserRound className="text-lg" />
                  <input type="text" placeholder="Name" required />
                </label>
                <label className="input validator w-full">
                  <MdOutlineAlternateEmail className="text-lg" />
                  <input type="email" placeholder="Email" required />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
                <label className="input validator w-full">
                  <LuKeyRound className="text-lg" />
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  />
                </label>
                <p className="validator-hint hidden">
                  Must be more than 8 characters
                </p>
                <label className="fieldset-label mt-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  I agree to the terms and conditions
                </label>
                <div className="flex justify-end mt-4">
                  <button className="btn btn-neutral px-6">
                    <LuUserPlus className="text-lg" />
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
