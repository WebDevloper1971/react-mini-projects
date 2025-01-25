import { Link } from "react-router-dom";
import { UseMyAppContext } from "../context/MyAppContext";

const Sidebar = () => {
  const { visible, showHide } = UseMyAppContext();

  return (
    <div
      className={`
       transition-all duration-700 ease-in-out absolute top-0 w-full bg-indigo-500 shadow-2xl flex gap-8 text-white
        ${
          visible
            ? "  right-0 h-svh  sm:w-1/4 "
            : "  -right-full h-svh md:w-2/4 sm:w-3/4 "
        }
      `}
    >
      <div className="flex flex-col px-4 gap-10 w-full">
        <h2 className="text-xl font-semibold mt-6 px-2 py-4  border-b border-white">
          Navigation Panel
        </h2>
        <div className="flex flex-col gap-4 p-2 w-full">
          {[
            { path: "/", name: "Home" },
            { path: "/losin", name: "LoginSignup" },
            { path: "/todo", name: "Todo" },
            { path: "/bmi", name: "BMI" },
            { path: "/psv", name: "Password Validator" },
            { path: "/cg", name: "Color Generator" },
            { path: "/curConv", name: "Currency Converter" },
            { path: "/carousel", name: "Carousel" },
            { path: "/otp", name: "OTP Validation" },
          ].map((element, index) => (
            <Link
              className="font-semibold"
              key={index}
              to={element.path}
              onClick={showHide}
            >
              {element.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
