import { useState } from "react";

const PasswordValidator = () => {
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [color, setColor] = useState<string>("text-red-400");

  const checkPassword = () => {
    if (password.length < 8) {
      setMessage("Strong Passwords have at least 8 characters");
    } else if (!/[A-Z]/.test(password)) {
      setColor("text-orange-400");
      setMessage("One Uppercase Letter Should Be Present");
    } else if (!/\d/.test(password)) {
      setColor("text-yellow-400");
      setMessage("At least one number should be present");
    } else if (!/[\s~'!@#$%]/.test(password)) {
      setColor("text-orange-400");
      setMessage(
        "All Strong passwords has a Special Characters  in them { !, @, $ , % }"
      );
    } else {
      setColor("text-green-400");
      setMessage("You've got a Strong Password");
    }
  };

  return (
    <div className="h-svh bg-slate-100 flex justify-center items-center relative">
      <div className="passwordValidator flex flex-col gap-4 md:w-[400px] w-[300px]">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="p-2 rounded shadow-md"
        />
        <button
          onClick={() => {
            checkPassword();
          }}
          className="bg-black text-white p-2 rounded"
        >
          Check Password Strength
        </button>

        <h1
          className={`${color} mt-10 absolute top-20 left-1/2 -translate-x-1/2 max-w-[300px] text-justify`}
        >
          {message}
        </h1>
      </div>
    </div>
  );
};

export default PasswordValidator;
