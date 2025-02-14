import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const WelcomeAlert = () => {
  useEffect(() => {
    const welcome = localStorage.getItem("showWelcomeAlert");
    if (!welcome) {
      return localStorage.setItem("showWelcomeAlert", "true");
    }
    if (welcome === "true") {
      document.getElementById("welcome_modal").showModal();
    }
  }, []);

  const handleAccept = () => {
    document.getElementById("welcome_modal").close();
    localStorage.setItem("showWelcomeAlert", "false");
  };
  const handleClose = () => {
    window.location.href = "https://www.google.com";
  };
  return (
    <>
      <dialog id="welcome_modal" className="modal">
        <div className="modal-box w-11/12 max-w-6xl h-[90%]">
          <div className="p-5">
            <h3 className="font-semibold text-lg">
              Important Warning & Terms of Use
            </h3>
            <h1 className="text-md my-4">
              Dear Users, Welcome to our Blood Donation Platform. Your safety
              and the ethical use of this platform are our top priorities.
              Before using this service, please carefully read and follow these
              important rules and disclaimers.
            </h1>
            <div>
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-red-700">
                    🩸 For Blood Donors:
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      ✔ Always use your real identification to create a profile
                    </li>
                    <li>
                      ✔ Only donate if you are <strong>physically fit</strong>{" "}
                      (18-65 years old, at least 50kg, no serious medical
                      conditions).
                    </li>
                    <li>
                      ✔ <strong>Do not donate</strong> if you have infectious
                      diseases, low hemoglobin, recent vaccinations, or
                      surgeries.
                    </li>
                    <li>
                      ✔ Be honest about your <strong>medical history</strong> to
                      prevent health risks for the recipient.
                    </li>
                    <li>
                      ✔ Blood donation is <strong>completely voluntary</strong>
                      —never demand money in exchange for donation.
                    </li>
                  </ul>
                </div>

                {/* Blood Requesters */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-red-700">
                    🆘 For Blood Requesters:
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      ✔ <strong>Verify the donor’s details</strong> and consult
                      with a certified medical professional before proceeding.
                    </li>
                    <li>
                      ✔ Never <strong>force, pressure, or harass</strong> a
                      donor to donate blood.
                    </li>
                    <li>
                      ✔ We strongly recommend{" "}
                      <strong>
                        collecting blood through hospitals & registered blood
                        banks
                      </strong>{" "}
                      for safety.
                    </li>
                    <li>
                      ✔ The platform is <strong>not responsible</strong> for any
                      false claims made by donors or requesters.
                    </li>
                  </ul>
                </div>

                {/* Legal & Ethical Guidelines */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-red-700">
                    🔹 Legal & Ethical Guidelines for Users
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      🚫 <strong>Strictly Prohibited:</strong>
                    </li>
                    <li>
                      ❌ Selling or buying blood in any form—
                      <strong>this is illegal</strong> and strictly against our
                      policy.
                    </li>
                    <li>
                      ❌ Providing <strong>false medical information</strong>
                      —this can put lives at risk.
                    </li>
                    <li>
                      ❌ <strong>Harassment</strong> or misuse of
                      donor/requester contact details.
                    </li>
                    <li>
                      ❌ Sharing <strong>false emergency requests</strong>—this
                      harms those in genuine need.
                    </li>
                  </ul>
                </div>

                {/* Legal Disclaimer */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-red-700">
                    🚨 Legal Disclaimer:
                  </h3>
                  <p className="mt-2">
                    This platform acts as a{" "}
                    <strong>voluntary connection service</strong> between donors
                    and requesters. We <strong>do not guarantee</strong> donor
                    availability, blood compatibility, or health status. The
                    developers and administrators of this platform are{" "}
                    <strong>not liable</strong> for any misuse, medical
                    complications, or financial transactions that occur outside
                    of the intended purpose of this service. Any violation of
                    these rules may result in a <strong>permanent ban</strong>{" "}
                    from the platform and legal action if necessary.
                  </p>
                </div>

                {/* Developer's Notice */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-red-700">
                    🔹 Developer’s Notice: Avoiding Legal Issues
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      ✔ <strong>No transaction feature</strong> should be
                      enabled for blood donations (to prevent illegal trading).
                    </li>
                    <li>
                      ✔ Implement <strong>strict identity verification</strong>{" "}
                      to avoid fake requests and scams.
                    </li>
                    <li>
                      ✔ Log all user activities responsibly and provide{" "}
                      <strong>reporting features</strong> for abuse prevention.
                    </li>
                    <li>
                      ✔ Ensure <strong>user privacy protection</strong>—no
                      unauthorized sharing of contact details.
                    </li>
                    <li>
                      ✔ Add <strong>terms & conditions agreement</strong> before
                      users can register or make requests.
                    </li>
                  </ul>
                </div>

                <p className="text-center text-2xl font-bold text-gray-700 mt-4 dancing">
                  Together, we can save lives! Use this platform responsibly and
                  ethically.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-14 justify-end">
                <button
                  className="btn btn-neutral px-8 btn-sm"
                  onClick={handleAccept}
                >
                  Accept & Promise
                </button>
                {/* <form method="dialog"> */}
                <button
                  className="btn btn-warning px-6 btn-sm"
                  onClick={handleClose}
                >
                  <IoClose className="text-lg" /> Close
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default WelcomeAlert;
