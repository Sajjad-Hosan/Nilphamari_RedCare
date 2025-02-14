import { CgLogIn } from "react-icons/cg";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { MdLockReset } from "react-icons/md";
import { TiArrowShuffle } from "react-icons/ti";
import { Link } from "react-router-dom";

const ForgotMessage = () => {
  return (
    <>
      <div className="card p-14 items-start gap-3">
        <h1 className="text-3xl font-semibold">Reset password message</h1>
        <p className="text-sm">
          Please check your email or phone for a password reset link. If you
          didn't receive it, please make sure to check your spam folder or
          contact our support team.
        </p>
        <Link to={"/login"} className="btn btn-neutral mt-4">
          Login
          <CgLogIn className="text-lg" />
        </Link>
      </div>
    </>
  );
};

const ForgotPass = () => {
  return (
    <div className="max-w-screen mx-auto p-10">
      <div className="card p-10 border max-w-2xl mx-auto">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <MdLockReset className="text-lg" /> Forgot Password
        </h1>
        <ForgotMessage />
        {/* <form className="my-14 flex flex-col items-center gap-8">
          <input
            type="text"
            className="input"
            placeholder="Write your email or number"
          />
          <button className="btn btn-neutral px-6" type="submit">
            Continue <HiMiniArrowSmallRight className="text-lg" />
          </button>
        </form> */}
        <a className="btn btn-ghost mt-2 ml-auto">
          Use another method
          <TiArrowShuffle className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default ForgotPass;
