import HeroImage from "../assets/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="flex justify-between">
      <div className="mt-40">
        <div className="font-extrabold w-6/6 text-gray-700 text-4xl">
          <h1>
            Bring everyone <br></br> together to build <br></br>better products.
          </h1>
        </div>
        <div className="mt-10 text-gray-500 text">
          <p>
            Manage makes it simple for software teams <br></br> to plan
            day-to-day tasks while keeping the <br></br>larger team goals in
            view.
          </p>
        </div>
        <div className="mt-10 ">
          <button className=" bg-orange-500 hover:bg-orange-400 text-white font-semibold w-40 h-12 px-8 py-2 rounded-l-full rounded-r-full">
            Get Started
          </button>
        </div>
      </div>

      <div className="mt-16 ml-10">
        <img className="h-108 w-148" src={HeroImage} alt="hero image"></img>
      </div>
    </div>
  );
};

export default Hero;
