import useAuth from "../hooks/useAuth";

const UserRoutes = ({ children }) => {
  const { mgUser, loading } = useAuth();
  if (!mgUser.role === "user" || loading === true) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="card p-20 gap-2 items-center">
          <div className="card fixed left-8 bottom-5">
            <img
              src="/logo.png"
              alt="Nilphamari RedCare"
              width={60}
              className="object-contain mx-auto mb-2"
            />
            <span className="text-2xl font-bold dancing">
              Nilphamari RedCare
            </span>{" "}
          </div>
          <span className="loading loading-dots loading-lg"></span>
          <h1 className="text-xl font-semibold">Please wait a moment</h1>
        </div>
      </div>
    );
  }
  return <>{children}</>;
};

export default UserRoutes;
