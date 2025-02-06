const donorEligibilityRules = [
  {
    canDo: "Be between 18 and 60 years old.",
    cannotDo: "Be under 18 or over 60 years old.",
  },
  {
    canDo: "Have a valid phone number for contact.",
    cannotDo: "Have an invalid phone number or missing contact information.",
  },
  {
    canDo: "Provide a valid email address for communication.",
    cannotDo: "Provide an invalid or missing email address.",
  },
  {
    canDo: "Have a healthy body and no disqualifying medical conditions.",
    cannotDo:
      "Have any conditions such as HIV, Hepatitis, heart disease, or uncontrolled diabetes.",
  },
  {
    canDo: "Donate blood every 8-12 weeks (if eligible).",
    cannotDo: "Donate blood too frequently (less than 8 weeks apart).",
  },
  {
    canDo: "Provide accurate and honest information about medical history.",
    cannotDo:
      "Hide or lie about health conditions or medications that may affect donation eligibility.",
  },
  {
    canDo: "Consent to donate blood and understand the process.",
    cannotDo: "Refuse to give consent or not understand the donation process.",
  },
  {
    canDo:
      "Be in good physical health at the time of donation (no fever, illness, or infections).",
    cannotDo: "Be sick or have any active infections at the time of donation.",
  },
  {
    canDo: "Be well-hydrated and have had a nutritious meal before donation.",
    cannotDo: "Donate blood on an empty stomach or when dehydrated.",
  },
  {
    canDo:
      "Be free from any serious allergic reactions or major health issues.",
    cannotDo:
      "Have severe allergies or uncontrolled chronic illnesses that could affect blood donation.",
  },
  {
    canDo: "Have a stable weight (typically above 50 kg).",
    cannotDo:
      "Weigh less than the minimum weight requirement (usually below 50 kg).",
  },
];

const RulesModal = () => {
  return (
    <>
      <dialog id="rules_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Donors Rules </h3>
          </div>
          <div className="p-10 grid grid-cols-2 gap-3 overflow-scroll lg:h-[30rem]">
            <p className="font-semibold">Can Do</p>
            <p className="font-semibold">Can not Do</p>
            {donorEligibilityRules.map(({ canDo, cannotDo }, i) => (
              <>
                <div role="alert" className="alert alert-success" key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{canDo}</span>
                </div>
                <div role="alert" className="alert alert-warning" key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>{cannotDo}</span>
                </div>
              </>
            ))}
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-neutral px-8">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default RulesModal;
