import img from "../assets/undraw_project-completed_fwjq.svg";

const Home = () => {
  return (
    <div className="overflow-y-auto h-svh flex justify-center items-center">
      <div className="flex gap-2 w-full h-[80svh] overflow-y-auto">
        <div className="img-container flex-1 flex justify-center items-center ">
          <img
            src={img}
            alt="main-image"
            className=" h-[80%] w-[80%] -scale-x-[1]"
          />
        </div>
        <div className="info-conatiner flex-1 flex flex-col gap-10 justify-center">
          <h1 className="lg:text-6xl text-indigo-500  font-bold w-fit h-fit">
            React Mini Projects
          </h1>
          <p className="text-lg leading-9 max-w-[80%] text-justify">
            Here are some of small projects made with react to play with. Feel
            free to check them out and if you want to see code implementation
            just visit my github through footer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
