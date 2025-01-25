const CurrencyConverter = () => {
  /*function convert(from, to, amount) {
  fetch(`https://api.frankfurter.app/latest?base=${from}&symbols=${to}`)
    .then((resp) => resp.json())
    .then((data) => {
      const convertedAmount = (amount * data.rates[to]).toFixed(2);
      alert(`${amount} ${from} = ${convertedAmount} ${to}`);
    });
  }

convert("EUR", "USD", 10); */
  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="h-[500px] w-full flex flex-col gap-4 lg:max-w-[400px] max-w-[300px] bg-slate-600">
        <h1 className="text-xl font-semibold text-center my-2">
          Currency Converter
        </h1>
        <div className="">
          <input type="text" />
          <select name="" id="">
            <option value=""></option>
          </select>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
