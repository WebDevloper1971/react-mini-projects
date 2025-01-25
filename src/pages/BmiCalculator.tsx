// Height in meters = 170 cm / 100 = 1.7 m
// BMI = 70 / (1.7 * 1.7)
// BMI = 70 / 2.89
// BMI ≈ 24.22

import { useState } from "react";

const BmiCalculator = () => {
  const [mass, setMass] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);
  const bmiInfo = (bmi: number) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi > 18.5 && bmi < 24.9) {
      return "Normal Weight";
    } else if (bmi > 24.9 && bmi < 29.9) {
      return "Overweight";
    } else if (bmi > 29.9 && bmi < 34.9) {
      return "Obesity";
    } else if (bmi > 34.9 && bmi < 39.9) {
      return "Extreme Obesity";
    }
  };

  const calculateBMI = (mass: number, height: number) => {
    const bmiScore = mass / ((height / 100) * (height / 100));
    setBmi(bmiScore);
  };

  return (
    <div className="h-[90svh] w-full flex justify-center items-center bg-slate-100 flex-col gap-8">
      <h1 className="text-2xl font-semibold">BMI Calculator</h1>
      <div className="md:w-[400px] w-[300px] bg-white h-[400px] rounded shadow-xl p-4 flex flex-col gap-8">
        <div className="input-group flex flex-col gap-2">
          <label htmlFor="height">Weight</label>
          <input
            type="number"
            id="weight"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="shadow-inner p-2 rounded border border-slate-200"
          />
        </div>

        <div className="input-group flex flex-col gap-2">
          <label htmlFor="height">Height</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="shadow-inner p-2 rounded border border-slate-200"
          />
        </div>

        <button
          onClick={() => {
            calculateBMI(mass, height);
            setMass(0);
            setHeight(0);
          }}
          className="h-12 w-32 bg-black text-white rounded mt-4"
        >
          Calculate BMI
        </button>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-md">
            Your BMI : <span className="underline">{bmi.toFixed(2)}</span>
          </h1>
          <h1 className="font-semibold text-md">
            Info : <span className="underline">{bmiInfo(Number(bmi))}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
