import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ColorGenerator = () => {
  const [colors, setColors] = useState<string[]>();
  const hexGenerator = () => {
    const letters = "0123456789ABCDEF";
    let colorHex = "#";
    for (let i = 0; i < 6; i++) {
      colorHex += letters[Math.floor(Math.random() * 16)];
    }
    return colorHex;
  };

  const colorSetter = () => {
    const list: string[] = [];
    for (let i = 0; i < 6; i++) {
      const c: string = hexGenerator();
      list.push(c);
    }
    setColors(list);
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const detectKeyDown = (e: { key: string }) => {
    if (e.key === " ") {
      colorSetter();
    }
  };
  return (
    <div className="w-full h-[90svh] flex justify-center items-center relative">
      <button
        onClick={colorSetter}
        className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-black text-white p-2 rounded"
      >
        Generate Colors
      </button>
      <div className="mt-4 flex flex-wrap justify-evenly w-[300px] h-[480px] gap-2 py-4">
        {colors &&
          colors.map((c, i) => (
            <div
              key={i}
              style={{ backgroundColor: `${c}` }}
              className="size-32 text-white flex justify-center items-center rounded cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(c);
                toast.success("Copied To Clipboard !");
              }}
            >
              {c}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ColorGenerator;
