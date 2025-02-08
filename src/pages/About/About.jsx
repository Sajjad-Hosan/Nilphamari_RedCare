import image from "../../assets/hands.png";
import { Link } from "react-router-dom";
import { MdOutlineMedicalInformation } from "react-icons/md";

function About() {
  return (
    <div className="p-10">
      {/* Hero Section */}
      <section className="text-center p-8">
        <img
          src="/logo.png"
          alt="Nilphamari RedCare"
          width={180}
          className="object-contain mx-auto mb-2"
        />
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to <br /> <span className=" mt-2 text-5xl font-bold dancing">Nilphamari RedCare</span>{" "}
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-6">
          Join us in making a difference by donating blood and saving lives.
          Every donation counts!
        </p>
        <button
          className="btn btn-primary text-white px-6 py-2 rounded-full text-lg"
          disabled
        >
          Learn More
        </button>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mt-16 text-center p-6">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg mb-8">
          We are a dedicated platform aiming to connect blood donors with those
          in need. Our mission is to create a community where donating blood
          becomes an easy, life-saving act. With a simple and effective user
          interface, our platform helps you find donors and request blood in
          emergency situations.
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <div className="card bg-white text-gray-700">
            <div className="card-body">
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p>
                Our mission is to create awareness and make blood donation easy
                and accessible for everyone.
              </p>
            </div>
          </div>
          <div className="card bg-white text-gray-700">
            <div className="card-body">
              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p>
                We envision a world where everyone has access to life-saving
                blood when they need it the most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 bg-white text-gray-900 py-8">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-10">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-gray-300 shadow-md p-4">
              <div className="card-body">
                <h3 className="text-xl font-bold">Easy Registration</h3>
                <p>
                  Quickly sign up as a donor or a volunteer and start
                  contributing to save lives.
                </p>
              </div>
            </div>
            <div className="card bg-gray-300 shadow-md p-4">
              <div className="card-body">
                <h3 className="text-xl font-bold">Real-time Updates</h3>
                <p>
                  Receive real-time notifications for requests or blood
                  donations in your area.
                </p>
              </div>
            </div>
            <div className="card bg-gray-300 shadow-md p-4">
              <div className="card-body">
                <h3 className="text-xl font-bold">Community-driven</h3>
                <p>
                  Engage with other users, share donations, and be a part of a
                  supportive community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-16 p-14 border card border-dashed">
        <img
          src={image}
          alt=""
          className="object-contain mx-auto mb-4"
          width={130}
        />
        <h2 className="text-3xl font-semibold mb-4">
          Start Saving Lives Today
        </h2>
        <p className="text-lg mb-6">
          Be a part of this noble cause and help us save lives.
        </p>
        <div className="flex justify-end mt-6 gap-4">
          <button className="btn btn-neutral px-8">Donate Now</button>
          <Link to={"/new-donor"} className="btn btn-outline ">
            Be a Donor <MdOutlineMedicalInformation className="text-lg" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
