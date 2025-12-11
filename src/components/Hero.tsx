import HeroImage from "../assets/illustration-intro.svg";
import Button from "./ui/Button";
import MotionWrapper from "./ui/MotionWrapper";
import MotionWrapperright from "./ui/MotionWrapperright";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.5,
    once: true,
  });
  return (
    <header className="relative  overflow-x-clip">
      {/* <div className="bg-[url('/bg-tablet-pattern.svg')] -mt-90 md:-mt-90 md:ml-54 z-[-1] border md:h-[53rem]  md:w-[109rem] h-[850px] w-[590px]  absolute bg-no-repeat bg-top-right " /> */}

      <div className="z-[-1]   md:h-212  w-full md:w-fit h-172 absolute  md:-top-96 -top-80  md:-right-46 -right-42">
        <img className="h-full w-auto" src="/bg-tablet-pattern.svg" alt="" />
      </div>
      {/* md:w-[109rem]
       w-[590px] 
       md:ml-54*/}

      <div className="max-w-[1500px] w-[80%] mx-auto flex flex-col-reverse text-primary-blue lg:flex-row  lg:justify-between">
        <div className=" mt-12 md:mt-20 lg:mt-40 lg:w-1/2">
          <MotionWrapper animateNow={isInView}>
            <div className=" font-extrabold whitespace-pre-line   text-4xl md:text-5xl">
              <h1 className="whitespace-pre-line text-center lg:text-start ">
                Bring everyone
                <br /> together to build <br />
                better products.
              </h1>
            </div>
            <div className="mt-6  lg:mt-10 whitespace-pre-line font-light text-lg md:text-2xl opacity-70">
              <p className="whitespace-pre-line text-center  lg:text-start w-full  lg:w-10/12">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
            </div>
            <div className=" mt-6 flex text-white lg:justify-start justify-center lg:mt-10 ">
              <Button bgcolor="bg-primary-orange" />
            </div>
          </MotionWrapper>
        </div>

        <div
          ref={sectionRef}
          className="mt-10 lg:mt-16 flex w-full lg:w-1/2 justify-center lg:justify-end"
        >
          <MotionWrapperright animateNow={isInView}>
            <img
              className=" w-12/12  lg:w-[500px]"
              src={HeroImage}
              alt="hero image"
            />
          </MotionWrapperright>
        </div>
      </div>
    </header>
  );
};

export default Hero;
