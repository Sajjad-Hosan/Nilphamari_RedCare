import { FaXmark } from "react-icons/fa6";
import EmptyCard from "../EmptyCard/EmptyCard";
import Card from "../Shared/Card";

const SearchBoxResultModal = () => {
  const arrays = [...Array(0).keys()];
  return (
    <>
      <dialog id="search_box_modal" className="modal">
        <div className="modal-box max-w-5xl h-[90%]">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Search Result</h3>
            <form method="dialog">
              <button
                className="btn btn-sm btn-neutral tooltip tooltip-bottom"
                data-tip="Close"
              >
                <FaXmark />
              </button>
            </form>
          </div>
          <div className="p-5">
            <div className="overflow-scroll overflow-x-clip flex items-center">
              {arrays.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {arrays.map((i) => (
                    <Card key={i} i={i} border="orange" type="need" />
                  ))}
                </div>
              ) : (
                <EmptyCard heading="no result found" />
              )}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SearchBoxResultModal;
