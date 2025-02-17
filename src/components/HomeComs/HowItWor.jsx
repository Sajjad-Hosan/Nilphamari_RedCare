import { FaSearch, FaPhoneAlt, FaHandsHelping } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch size={40} className="text-red-500" />,
      title: "Find a blood donor",
      description:
        "Find donors according to your needs, blood type and location.",
    },
    {
      icon: <FaPhoneAlt size={40} className="text-blue-500" />,
      title: "Contact Them",
      description: "Contact the donor directly via call or message.",
    },
    {
      icon: <FaHandsHelping size={40} className="text-green-500" />,
      title: "Get Help",
      description: "Donor will help you and provide the blood you need.",
    },
  ];

  return (
    <div className="container mx-auto p-6 text-center mt-20">
      <h2 className="text-3xl font-bold mb-6">How does it work?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="card bg-base-100 border border-gray-200 p-6 rounded-xl"
          >
            <div className="card-body flex flex-col items-center text-center">
              {step.icon}
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
