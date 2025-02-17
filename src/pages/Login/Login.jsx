import { AiOutlineHome } from "react-icons/ai";
import { CgLogIn } from "react-icons/cg";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa6";
import { LuKeyRound, LuMailWarning, LuUserPlus } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import image from "../../assets/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const Login = () => {
  const { handleFirebaseLogin } = useAuth();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = (e) => {
    handleFirebaseLogin(e.email, e.password)
      .then(async (res) => {
        const data = {
          email: e.email,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };
        const result = await axiosPublic.post("/login", data);
        navigate(state || "/");
      })
      .catch((ee) => {
          toast.error("Please check your email or password");        
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="card p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold dancing">Login Page</h1>
          <div className="flex items-center gap-3">
            <Link to={"/register"} className="btn btn-neutral">
              <LuUserPlus className="text-lg" /> Register
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
              <p className="text-2xl font-semibold dancing">Welcome back,</p>
              <p className="text-md font-semibold dancing">
                Ready to continue your journey!
              </p>
            </div>
            <div className="mt-5">
              <form
                className="mt-8 flex flex-col gap-2"
                onSubmit={handleSubmit(handleLogin)}
              >
                <label className="input validator w-full">
                  <MdOutlineAlternateEmail className="text-lg" />
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </label>
                <p className="validator-hint hidden">
                  Enter valid email address
                </p>
                <label className="input validator w-full">
                  <LuKeyRound className="text-lg" />
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    minLength="8"
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    {...register("password", { required: true })}
                  />
                </label>
                <p className="validator-hint hidden">
                  Must be more than 8 characters
                </p>
                <div className="flex items-center justify-between">
                  <Link to={"/forgot-password"} className="link link-hover">
                    Forgot password?
                  </Link>
                  <label className="fieldset-label mt-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-xs"
                    />
                    Remember me
                  </label>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="btn btn-neutral px-6">
                    <CgLogIn className="text-lg" />
                    Login Now
                  </button>
                </div>
              </form>
              <p className="text-center text-sm font-semibold my-8">
                or login with
              </p>
              <div className="mt-4 flex items-center gap-4 justify-center">
                <button
                  onClick={() => {}}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
