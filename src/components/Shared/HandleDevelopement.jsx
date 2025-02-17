const HandleDevelopement = () => {
  return (
    <>
      <dialog id="handle_developement" className="modal">
        <div className="modal-box">
          <div className="p-5 flex flex-col items-center justify-center">
            <h3 className="font-semibold text-3xl">Alert</h3>
            <p className="mt-3 text-sm font-semibold text-center">
              This UI is still in development mode. Some features may not work
              properly.
            </p>
            <div className="mt-7 ml-auto">
              <form method="dialog">
                <button className="btn btn-neutral px-8">Keep it up!</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default HandleDevelopement;
