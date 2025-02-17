import { FaDiscord, FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const socials = [
  {
    name: "facebook",
    icon: <FaFacebook className="text-xl text-blue-700" />,
    url: "https://www.facebook.com/nilphamari.veinlink",
  },
  {
    name: "twitter",
    icon: <FaTwitter className="text-xl text-blue-500" />,
    url: "https://twitter.com/nilphamari_veinlink",
  },
  {
    name: "telegrame",
    icon: <FaTelegram className="text-xl text-blue-500" />,
    url: "https://t.me/nilphamari_veinlink",
  },
  {
    name: "discord",
    icon: <FaDiscord className="text-xl text-violet-700" />,
    url: "https://discord.com/invite/nilphamariVeinlink",
  },
];

const Footer = () => {
  const { handleDevelopement } = useAuth();
  return (
    <>
      <footer className="footer sm:footer-horizontal text-base-content p-10 mt-20">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="flex justify-between items-end border-t border-gray-300 px-10 py-4">
        <div className="flex flex-col gap-4">
          <nav className="grid-flow-col items-center">
            <img
              src="/public/logo.png"
              width={80}
              alt="Nilphamari RedCare"
              className="object-contain"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg dancing">
                Nilphamari RedCare
              </p>
              <p className="text-sm font-semibold">
                Support humanity from 2025
              </p>
            </div>
          </nav>
          <nav className="md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              {socials.map(({ icon, url, name }, i) => (
                <a
                  key={i}
                  href={url}
                  className="btn btn-sm btn-circle btn-ghost flex tooltip"
                  data-tip={name}
                >
                  {icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div>
          <form
            className="card p-5 gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleDevelopement();
            }}
          >
            <h6 className="text-lg font-semibold mb-3">
              Contact or Feedback us
            </h6>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                className="input  w-full"
                placeholder="Enter your name"
              />
              <input
                type="email"
                className="input w-full"
                placeholder="Enter your email"
              />
            </div>
            <textarea
              name=""
              id=""
              className="textarea w-full"
              rows={4}
              placeholder="Message"
            ></textarea>
            <button className="px-7 btn btn-sm btn-neutral ml-auto mt-3">
              Send
            </button>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
