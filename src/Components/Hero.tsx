import HeroImage from "../assets/illustration-intro.svg";

const Hero = () => {
  return (
    <header className="flex flex-col-reverse lg:flex-row md:justify-between">
      <div className=" mt-12  md:mt-40 md:w-1/2">
        <div className=" font-extrabold whitespace-pre-line  text-gray-700 text-4xl md:text-5xl">
          <h1 className="whitespace-pre-line">
            <span className="ml-4">Bring everyone</span> <br /> together to
            build <br></br>better products.
          </h1>
        </div>
        <div className="mt-6 md:mt-10 whitespace-pre-line font-light text-lg md:text-2xl text-gray-500 ">
          <p className="whitespace-pre-line w-full md:w-10/12">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
        </div>
        <div className=" mt-6 flex justify-center items-center lg:mt-10 ">
          <button className=" bg-orange-500 hover:bg-orange-400 text-white font-semibold w-40 h-12 px-8 py-2 rounded-l-full rounded-r-full">
            Get Started
          </button>
        </div>
      </div>

      <div className="mt-10 lg:mt-16 flex w-full md:w-1/2 justify-center lg:justify-end">
        <img
          className=" w-12/12  lg:w-[500px]"
          src={HeroImage}
          alt="hero image"
        />
      </div>
    </header>
  );
};

export default Hero;
