const FAQs = [
  {
    question: "Who is eligible to donate blood?",
    answer:
      "People who are between the ages of 18 and 60, weigh at least 45 kg, are in good health, and have not donated blood in the last three months are eligible to donate blood.",
  },
  {
    question: "How often can I donate blood?",
    answer:
      "You can donate whole blood every three months. Platelet and plasma donations can be done more frequently, depending on the specific requirements and guidelines.",
  },
  {
    question: "What happens during the blood donation process?",
    answer:
      "The donation process takes about 30-45 minutes. It involves a quick health check-up, blood collection, and a short rest after donating. The actual blood collection takes around 10-15 minutes.",
  },
  {
    question: "Is blood donation safe?",
    answer:
      "Yes, blood donation is a safe procedure. All equipment used is sterile and disposed of after each donation. You will be monitored throughout the process to ensure your comfort and safety.",
  },
  {
    question: "What should I do after donating blood?",
    answer:
      "After donating blood, rest for a few minutes, drink plenty of fluids, and eat a snack. Avoid heavy exercise or strenuous activity for the rest of the day.",
  },
];

const Contact_Support = () => {
  return (
    <div className="container mx-auto p-6 text-center mt-20">
      <h2 className="text-3xl font-bold mb-14">Contact & Supports</h2>

      <div className="flex flex-col lg:flex-row justify-between gap-10 ">
        <div className="flex flex-col gap-6 lg:w-[50%]">
          <div className="border border-gray-200 p-10 rounded-lg space-y-2">
            <h3 className="text-xl font-semibold">আমাদের অবস্থান</h3>
            <p className="text-sm text-gray-600">নীলফামারী সদর, রংপুর</p>
          </div>

          <div className="border border-gray-200 p-10 rounded-lg space-y-2">
            <h3 className="text-xl font-semibold">জরুরি যোগাযোগ</h3>
            <p className="text-sm text-gray-600">হেল্পলাইন: ০১৭*******</p>
            <p className="text-sm text-gray-600">ইমেইল: support@example.com</p>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4">FAQ</h3>
          <div>
            {FAQs.map((faq, i) => (
              <>
                {" "}
                <div
                  className="collapse collapse-arrow bg-base-100 border border-base-300 my-2"
                  key={i}
                >
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title font-semibold">
                    {faq.question}
                  </div>
                  <div className="collapse-content text-sm">{faq.answer}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Support;
