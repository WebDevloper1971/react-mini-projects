import { useState } from "react";

interface Pin {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
}

function OTPvalidation() {
  const [pin, setPin] = useState<Pin>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });
  const handleChange = (index: string) => {
    if (index) {
      setPin({
        ...pin,
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
      });
    }
  };
  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="gap-2 rounded p-1 grid grid-cols-6 h-[60px] lg:w-[400px] w-[300px] bg-black">
        <input
          minLength={1}
          maxLength={1}
          type="text"
          className="rounded border border-black p-2"
          value={pin.one}
          onChange={() => handleChange("one")}
        />
        <input
          minLength={1}
          maxLength={1}
          type="text"
          className="rounded border border-black p-2"
          value={pin.two}
          onChange={() => handleChange("two")}
        />
        <input
          minLength={1}
          maxLength={1}
          type="text"
          className="rounded border border-black p-2"
          value={pin.three}
          onChange={() => handleChange("three")}
        />
        <input
          minLength={1}
          maxLength={1}
          type="text"
          className="rounded border border-black p-2"
          value={pin.four}
          onChange={() => handleChange("four")}
        />
        <input
          minLength={1}
          maxLength={1}
          type="text"
          className="rounded border border-black p-2"
          value={pin.five}
          onChange={() => handleChange("five")}
        />
        <input
          minLength={1}
          maxLength={1}
          type="text"
          className="rounded border border-black p-2"
          value={pin.six}
          onChange={() => handleChange("six")}
        />
      </div>
    </div>
  );
}

export default OTPvalidation;
