import Card from "../Shared/Card";

const SearchBoxResultModal = () => {
  return (
    <>
      <dialog id="search_box_modal" className="modal">
        <div className="modal-box max-w-5xl h-[90%]">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Search Result</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-sm btn-neutral">Close</button>
            </form>
          </div>
          <div className="p-5">
            <div className="overflow-scroll grid gap-5 grid-cols-2">
              {[...Array(6).keys()].map((i) => (
                <Card key={i} />
              ))}
            </div>
          </div>
   
        </div>
      </dialog>
    </>
  );
};

export default SearchBoxResultModal;
