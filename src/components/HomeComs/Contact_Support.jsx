const FAQs = [
  {
    question: "আমি কিভাবে রক্তদাতা খুঁজবো?",
    answer:
      "নিলফামারী সদরের দর্শনে রক্তদাতার নাম, ইংরেজীতের অবস্থান, ইংরেজীতের জন্য ফোন নম্বার, ইমেইল ঠিকানা, �বস্থান মানচিত্র এবং রক্তদাতার ছবি দেওয়া আছে।",
  },
  {
    question: "আমি কিভাবে রক্তদানে যোগ দিতে পারি?",
    answer:
      "রক্তদানের জন্য ফোন নম্বার দিয়ে রক্তদান করতে পারেন। রক্তদানের জন্য ফোন নম্বার দিয়ে রক্ত দান করতে পারেন। রক্ত দান করতে পারেন।",
  },

  {
    question: "��মি কি��াবে ��ক্তদানের ��বি দে��য়া আছে?",
    answer:
      "রক্তদানের ��ন্য ��োন নম্বার দিয়ে ��ক্তদান করতে পারেন। ��ক্তদানের ��ন্য ��োন নম্বার দিয়ে ��ক্ত দান করতে পারেন। ��ক্ত দান করতে পারেন।",
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
            <p className="text-sm text-gray-600">নিলফামারী সদর, বাংলাদেশ</p>
          </div>

          <div className="border border-gray-200 p-10 rounded-lg space-y-2">
            <h3 className="text-xl font-semibold">জরুরি যোগাযোগ</h3>
            <p className="text-sm text-gray-600">হেল্পলাইন: ০১৭XXXXXXXX</p>
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
