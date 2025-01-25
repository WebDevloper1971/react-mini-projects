import { useState } from "react";
import img_one from "../images/nam-anh-QJbyG6O0ick-unsplash.jpg";
import img_two from "../images/hans-jurgen-mager-qQWV91TTBrE-unsplash.jpg";
import img_three from "../images/randall-ruiz-LVnJlyfa7Zk-unsplash.jpg";
import img_four from "../images/scott-carroll-favQn8WgRyk-unsplash.jpg";
import img_five from "../images/wynand-van-poortvliet-4AmyOdXZAQc-unsplash.jpg";

function Carousel() {
  const [index, setIndex] = useState<number>(0);
  const imgList = [
    {
      id: 1,
      url: img_one,
    },
    {
      id: 2,
      url: img_two,
    },
    {
      id: 3,
      url: img_three,
    },
    {
      id: 4,
      url: img_four,
    },
    {
      id: 5,
      url: img_five,
    },
  ];
  const handleCarousel = (option: string) => {
    if (option === "next" && index >= 0 && index < imgList.length - 1) {
      setIndex(index + 1);
    } else if (option === "back" && index >= 0 && index < imgList.length - 1) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
  };

  //   useEffect(() => {
  //     const timer = 5000;
  //     setInterval(() => {
  //       handleCarousel("next");
  //       console.log("next called");
  //     }, timer);
  //     console.log("In effect");
  //   }, [index]);

  return (
    <div className="w-full h-full">
      <div className="h-svh flex flex-col gap-6 justify-center items-center">
        <h2 className="text-3xl font-bold">Carousel</h2>
        <div className="relative w-[300px] lg:w-[600px] lg:h-[400px] h-[200px] bg-cyan-400 overflow-hidden">
          <button
            className="left absolute left-4 top-1/2 -translate-y-1/2"
            onClick={() => handleCarousel("back")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-white lg:size-8 size-6 "
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </button>

          <div className="w-full h-full bg-black">
            {imgList.map((content) => (
              <div className="w-full h-full" key={content.id}>
                <img
                  src={imgList[index].url}
                  alt="carousel-image"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            className="right absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => handleCarousel("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-white lg:size-8 size-6 "
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
