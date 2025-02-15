import { keys } from "localforage";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const MoreAboutModal = () => {
  const [tab, setTab] = useState(0);
  const arrays = [...Array(18).keys()];
  return (
    <>
      <dialog id="more_about_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl h-[90%]">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">More about user</h3>
            <form method="dialog">
              <button
                className="btn btn-sm btn-ghost tooltip tooltip-bottom"
                data-tip="Close"
              >
                <FaXmark />
              </button>
            </form>
          </div>
          <div className="p-5">
            <div role="tablist" className="tabs tabs-border flex justify-end">
              <a
                role="tab"
                className={`tab ${tab == 0 ? "tab-active" : ""}`}
                onClick={() => setTab(0)}
              >
                Address
              </a>
              <a
                role="tab"
                className={`tab ${tab == 1 ? "tab-active" : ""}`}
                onClick={() => setTab(1)}
              >
                Donates
              </a>
            </div>
            <div className="mt-5">
              {tab == 0 && (
                <div>
                  <p className="text-md font-semibold">More information</p>
                  <div className="flex flex-col gap-5 mt-8">
                    <div className="flex flex-wrap gap-5">
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-semibold">Address:</p>
                        <p className="text-sm text-gray-500">Nilphamri</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-semibold">City:</p>
                        <p className="text-sm text-gray-500">Nilphamri</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-semibold">District:</p>
                        <p className="text-sm text-gray-500">Nilphamri</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-semibold">Age:</p>
                        <p className="text-sm text-gray-500">20 years</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-semibold">Weight:</p>
                        <p className="text-sm text-gray-500">60 kg</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-10">
                      <div className="flex flex-col items-start gap-3">
                        <p className="text-sm font-semibold">About me:</p>
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Error quisquam quis nostrum deleniti labore
                          magnam explicabo, laborum blanditiis. Odit maiores
                          corrupti et alias iure mollitia doloremque velit
                          pariatur earum corporis commodi nam laudantium
                          necessitatibus, quo veritatis aliquam similique
                          aspernatur dolorem illo in, tempora nostrum sequi.
                          Consequatur quia quaerat ea fuga odit iure, neque
                          animi vero eos maxime laborum minus quam repellendus
                          soluta molestias eius qui temporibus reprehenderit
                          atque alias optio veniam tempore recusandae. Numquam
                          qui nam unde harum. Animi, magni.
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-3">
                        <p className="text-sm font-semibold mt-5">
                          Donation info:
                        </p>
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ratione laboriosam quia quaerat nulla, ex fugiat
                          ad vero odio sunt delectus rerum placeat, mollitia
                          illo atque debitis laborum saepe consequatur. Aperiam
                          nostrum magni voluptas quam consectetur perspiciatis?
                          Doloribus repellat corrupti odio atque fugiat earum at
                          suscipit nam voluptates soluta aut ea eaque odit
                          sapiente minima, sequi possimus provident, unde
                          temporibus quibusdam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {tab == 1 && (
                <div>
                  <p className="text-sm font-semibold text-right mb-3">
                    You have donated 10 People
                  </p>
                  <div className="overflow-scroll grid lg:grid-cols-3 gap-3 p-3">
                    {arrays.map((i) => (
                      <div
                        key={i}
                        className="card border flex-row items-center justify-between gap-3 px-5 py-3 transition-all duration-100 cursor-pointer hover:-translate-1 hover:scale-95"
                      >
                        <div className="flex items-center gap-3">
                          <img src="/logo.png" alt="" width={40} />
                          <h1 className="text-sm font-semibold">
                            Sajjad Hsoan
                          </h1>
                        </div>
                        <button className="btn btn-sm btn-neutral">View</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MoreAboutModal;
