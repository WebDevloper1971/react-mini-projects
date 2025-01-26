import OTPComponent from "../components/OTPComponent";
import { useLocalStorage } from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

interface OTP {
  pin: string;
}

function OTPvalidation() {
  const length = 6;
  const [otp, setOTP] = useLocalStorage<OTP>("otp", { pin: "" } as OTP);

  const generateOTP = (len: number) => {
    let pin = "";
    for (let i = 0; i < len; i++) {
      pin += Math.floor(Math.random() * 10);
    }
    setOTP({ ...otp, pin: pin });
  };

  const handleOTP = (pin: string) => {
    if (pin.length === length) {
      if (pin === otp.pin) {
        setOTP({ ...otp, pin: "" });
        toast.success("Verification Complete !");
      } else {
        setOTP({ ...otp, pin: "" });
        toast.error("Invalid OTP !");
      }
    }
  };
  return (
    <div className="h-svh w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        {otp.pin.length > 1 ? (
          <h1 className="text-xl">Your OTP : {otp.pin}</h1>
        ) : (
          ""
        )}
        <button
          onClick={() => generateOTP(length)}
          className="p-2 bg-black text-white rounded"
        >
          Generate OTP
        </button>
        {otp.pin.length > 1 ? (
          <OTPComponent length={length} handleOTP={handleOTP} />
        ) : (
          <h1 className="text-xl">Click on above button to generate OTP</h1>
        )}
      </div>
    </div>
  );
}

export default OTPvalidation;
