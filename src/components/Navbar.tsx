import { UseMyAppContext } from "../context/MyAppContext";

const Navbar = () => {
  const { showHide } = UseMyAppContext();
  return (
    <div className="h-[10svh] flex justify-between items-center ">
      <div className="logo lg:text-lg font-semibold lg:p-3  text-base p-2 bg-black text-white rounded-sm">
        Mini-Projects
      </div>
      <button onClick={showHide} className="hover:bg-indigo-100 p-2 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="size-8"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
