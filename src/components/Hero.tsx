import HeroImage from "../assets/illustration-intro.svg";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <header className="flex flex-col-reverse text-primary-blue lg:flex-row md:justify-between">
       <div className="bg-[url('/bg-tablet-pattern.svg')] -mt-90 md:-mt-60    md:ml-54 z-[-1] md:h-[856px] md:w-[1220px]  h-[850px] w-[830px] absolute bg-no-repeat bg-top-right"/> 
      <div className=" mt-12  md:mt-40 md:w-1/2">
        <div className=" font-extrabold whitespace-pre-line   text-4xl md:text-5xl">
          <h1 className="whitespace-pre-line text-center md:text-start ">
            Bring everyone
            <br /> together to build <br />
            better products.
          </h1>
        </div>
        <div className="mt-6 md:mt-10 whitespace-pre-line font-light text-lg md:text-2xl opacity-70">
          <p className="whitespace-pre-line text-center md:text-start w-full md:w-10/12">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
        </div>
        <div className=" mt-6 flex md:justify-start justify-center lg:mt-10 ">
          <Button />
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
