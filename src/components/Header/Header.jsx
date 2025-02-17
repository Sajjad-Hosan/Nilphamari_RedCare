import { Link, NavLink } from "react-router-dom";
import NotificationDrop from "../NotificationDrop/NotificationDrop";
import { AiOutlineHome } from "react-icons/ai";
import { TbInfoSquareRounded } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi";
import {
  LuLayoutDashboard,
  LuUserPlus,
  LuUserRound,
  LuUserRoundX,
} from "react-icons/lu";
import { CgLogIn } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";
import SearchBoxResultModal from "./SearchBoxResultModal";

const NotUser = () => {
  return (
    <>
      <details className="dropdown dropdown-bottom dropdown-left">
        <summary className="btn btn-circle btn-ghost">
          <LuUserRoundX className="text-lg" />
        </summary>
        <div className="mt-6 menu dropdown-content bg-gray-300 rounded-box z-40 w-56 p-4">
          <li>
            <Link to={"/login"}>
              {" "}
              <CgLogIn className="text-lg" /> Login
            </Link>
          </li>
          <li>
            <Link to={"/register"}>
              <LuUserPlus className="text-lg" /> Register
            </Link>
          </li>
        </div>
      </details>
    </>
  );
};

const MenuArrays = [
  {
    path: "/",
    name: "Home",
    icon: <AiOutlineHome className="text-lg" />,
  },
  {
    path: "/donors",
    name: "Donors",
    icon: <HiOutlineUsers className="text-lg" />,
  },
  {
    path: "/about",
    name: "About",
    icon: <TbInfoSquareRounded className="text-lg" />,
  },
];

const Header = () => {
  const { user, handleDevelopement } = useAuth();
  const handleSearchResult = (e) => {
    e.preventDefault();

    document.getElementById("search_box_modal").showModal();
  };
  return (
    <>
      <SearchBoxResultModal />
      <div className="navbar mb-4">
        <div className="navbar-start gap-2">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu gap-1 dropdown-content bg-gray-200 rounded-box z-20 mt-3 w-52 p-3"
            >
              {MenuArrays.map(({ name, icon, path }, i) => (
                <li key={i}>
                  <NavLink to={path} className="flex items-start">
                    {icon}
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link
              to={"/"}
              className="btn rounded-full btn-ghost text-xl dancing items-center"
            >
              <img src="/logo.png" alt="Nilphamari RedCare" width={40} />
              Nilphamari RedCare
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul tabIndex={0} className="menu menu-horizontal gap-2">
            {MenuArrays.map(({ name, icon, path }, i) => (
              <li key={i}>
                <NavLink to={path} className="flex items-start gap-2">
                  {icon}
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <form className="hidden md:flex" onSubmit={handleSearchResult}>
            <label className="input rounded-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search"
                name="search"
              />
            </label>
          </form>
          <NotificationDrop />
          <button
            className="btn btn-ghost btn-circle flex tooltip tooltip-bottom"
            data-tip="Dashboard"
            onClick={handleDevelopement}
          >
            <LuLayoutDashboard className="text-lg" />
          </button>
          {!!user === true ? (
            <Link
              to={"/profile"}
              className="btn btn-circle btn-ghost flex tooltip tooltip-bottom"
              data-tip="Profile"
            >
              <LuUserRound className="text-lg " />
            </Link>
          ) : (
            <NotUser />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
