import { useState } from "react";

interface OTPComponentProps {
  length: number;
  handleOTP: (pin: string) => void;
}

function OTPComponent({ length, handleOTP }: OTPComponentProps) {
  const [otp, setOTP] = useState(new Array(length).fill(""));

  const handleVerification = (element: HTMLInputElement, index: number) => {
    const value = element.value;
    if (!value) {
      return;
    }

    // making a temp array ---> don't update state directly.
    const newOTP = [...otp];
    newOTP[index] = value;

    setOTP(newOTP);

    const nextElement = element.nextSibling as HTMLInputElement;
    if (index < length - 1 && value && nextElement) {
      nextElement.focus();
    }

    handleOTP(newOTP.join(""));
  };

  const handleBackspace = (element: HTMLInputElement, index: number) => {
    const newOTP = [...otp];
    newOTP[index] = "";
    setOTP(newOTP);

    const previousElement = element.previousSibling as HTMLInputElement;
    if (index > 0 && index < length && previousElement) {
      previousElement.focus();
    }

    handleOTP(newOTP.join(""));
  };

  return (
    <div className="flex gap-2 max-w-xs lg:max-w-sm">
      {otp.map((data, index) => (
        <input
          id={data + index}
          type="text"
          key={index}
          minLength={1}
          maxLength={1}
          className="border border-black rounded size-9 text-center"
          onChange={(e) => handleVerification(e.currentTarget, index)}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              handleBackspace(e.currentTarget, index);
            }
          }}
        />
      ))}
    </div>
  );
}

export default OTPComponent;
