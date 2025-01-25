import { FormEvent, useEffect, useState } from "react";
import flowers from "../assets/flower-6033_256.gif";

interface User {
  username?: string;
  email: string;
  password: string;
}
const LoginSignup = () => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
  });
  const [current, setCurrent] = useState<string>("login");
  const [enable, setEnable] = useState<boolean>(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (current === "login") {
      if (user.email.length > 2 && user.password.length > 7) {
        setEnable(true);
      }
    } else if (current === "signup") {
      if (
        user.username &&
        user.username?.length > 5 &&
        user.email.length > 2 &&
        user.password.length > 7
      ) {
        setEnable(true);
      }
    } else {
      setEnable(false);
    }
  }, [user]);

  return (
    <div className="h-[90svh] flex w-full relative overflow-hidden bg-slate-50">
      <div
        className={
          "transition-all duration-500 ease-in-out absolute top-0 left-0 md:w-1/2 w-full h-full flex items-center justify-center"
        }
      >
        <div className="w-full bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-8 lg:max-w-[400px] max-w-[300px]">
          <h1 className="text-xl font-semibold text-center">
            {current === "login" ? "Login" : "Signup"}
          </h1>
          <div className="w-full flex justify-center">
            <img src={flowers} alt="" className="size-10" />
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            {current && current === "signup" && (
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow-md appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  autoComplete="username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow-md appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow-md appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-4 items-center justify-between">
              <button
                className="disabled:bg-gray-300 bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 h-12 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={!enable}
              >
                {current === "login" ? "Login" : "Signup"}
              </button>
              <button
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                onClick={() => {
                  if (current === "login") {
                    setCurrent("signup");
                  } else {
                    setCurrent("login");
                  }
                }}
              >
                {current === "login" ? "Signup" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
