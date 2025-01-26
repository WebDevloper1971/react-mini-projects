import { useState } from "react";
import toast from "react-hot-toast";

const CurrencyConverter = () => {
  /*
  
  function convert(from, to, amount) {
  fetch(`https://api.frankfurter.app/latest?base=${from}&symbols=${to}`)
    .then((resp) => resp.json())
    .then((data) => {
      const convertedAmount = (amount * data.rates[to]).toFixed(2);
      alert(`${amount} ${from} = ${convertedAmount} ${to}`);
    });
  }

  convert("EUR", "USD", 10); 
  
  */

  //1,599.02

  const currencyList = [
    {
      country: "RUSSIA",
      currency: "ruble",
      symbol: "₽",
      conversionToInd: 0.88,
      conversionFromInd: 1.13,
    },
    {
      country: "USA",
      currency: "usd",
      symbol: "$",
      conversionToInd: 86.21,
      conversionFromInd: 0.012,
    },
    {
      country: "JAPAN",
      currency: "yen",
      symbol: "¥",
      conversionToInd: 0.55,
      conversionFromInd: 1.81,
    },
    {
      country: "INDIA",
      currency: "rupee",
      symbol: "₹",
      conversionToInd: 1,
      conversionFromInd: 1,
    },
  ];

  const [num, setNum] = useState<number>(0);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [convertedCurrency, setConvertedCurrency] = useState<string>("");

  const convertToIndia = (currency: number, country: string) => {
    return (
      currency *
      currencyList.filter((c) => c.country === country)[0].conversionToInd
    );
  };
  const convertFromIndia = (currency: number, country: string) => {
    return (
      currency *
      currencyList.filter((c) => c.country === country)[0].conversionFromInd
    );
  };

  const handleConvert = () => {
    if (!from || !to || !num) {
      toast.error("Please Enter All Values");
    } else {
      const convertedFrom = convertToIndia(num, from);
      const convertedTo = convertFromIndia(convertedFrom, to);
      const symbol = currencyList.filter((c) => c.country === to)[0].symbol;
      setConvertedCurrency(symbol + convertedTo);
      setTo("");
      setFrom("");
    }
  };
  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="bg-slate-100 h-[500px] w-full flex flex-col gap-4 lg:max-w-[400px] max-w-[300px] rounded shadow-xl">
        <h1 className="text-2xl font-bold text-center my-4 mt-8">
          Currency Converter
        </h1>
        <div className="p-3 flex flex-col gap-4">
          <input
            type="text"
            placeholder="enter valid numbers"
            className="p-2 rounded w-full"
            value={num}
            onChange={(e) => setNum(parseFloat(e.target.value))}
          />

          <div className="flex justify-between">
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              name=""
              id=""
              className="p-2 rounded"
            >
              <option value="">From Country</option>
              <option value="USA">USA</option>
              <option value="RUSSIA">RUSSIA</option>
              <option value="INDIA">INDIA</option>
              <option value="JAPAN">JAPAN</option>
            </select>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              name=""
              id=""
              className="p-2 rounded"
            >
              <option value="">From Country</option>
              <option value="USA">USA</option>
              <option value="RUSSIA">RUSSIA</option>
              <option value="INDIA">INDIA</option>
              <option value="JAPAN">JAPAN</option>
            </select>
          </div>
          <button
            onClick={() => handleConvert()}
            className="mt-8 p-3 w-full rounded bg-black text-white hover:bg-gray-800"
          >
            Convert
          </button>

          <h1 className="text-lg font-semibold text-center mt-12">
            Converted Value
          </h1>
          <h2 className="font-semibold text-center text-2xl">
            {convertedCurrency}{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
