import MotionWrapper from "./ui/MotionWrapper";
import MotionWrapperright from "./ui/MotionWrapperright";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MainContent = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.9,
    once: true,
  });
  return (
    <section ref={sectionRef} className="relative overflow-x-clip">
      <div className="z-[-1]   md:h-212  w-full md:w-fit md:-bottom-110  md:-left-80 bottom-130 left-60  h-172 absolute ">
        {/* md:-top-96 -top-80  md:-right-46 -right-68 md:bottom-25  md:-left-110 */}
        <img className="h-auto w-full" src="/bg-tablet-pattern.svg" alt="" />
      </div>

      <div className="flex flex-col  md:flex-row max-w-[1500px] w-[95%] md:w-[90%]  lg:w-[80%] mx-auto text-primary-blue lg:justify-between">
        <div className="mt-20 md:mt-40 md:w-6/12">
          <MotionWrapper
            animateNow={isInView}
            className=""
            stagger={1}
            duration={1}
          >
            <div className="font-bold mt-10 lg:font-black text-4xl lg:text-4xl">
              <h3 className="w-full text-center lg:text-start">
                What's different about Manage?
              </h3>
            </div>
            <div className="mt-8 text-center lg:text-start md:text-xl opacity-50 md:mt-10">
              <p>
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>
          </MotionWrapper>
        </div>

        <div className="mt-10 md:w-6/12  md:ml-30 md:mt-40">
          <div className="mt-10">
            <div className="md:hidden flex items-center gap-4 bg-base-orange pr-px-4  rounded-l-full w-full">
              <div className="bg-primary-orange text-white font-semibold w-14 h-10 flex items-center justify-center rounded-full">
                01
              </div>
              <h3 className="font-semibold text-md">
                Track company-wide progress
              </h3>
            </div>

            <MotionWrapperright
              animateNow={isInView}
              className=""
              stagger={0.5}
              duration={1}
            >
              <div className="hidden md:flex gap-6">
                <div className="bg-primary-orange text-white font-semibold w-16 h-12 px-5 py-3 rounded-full flex items-center justify-center">
                  01
                </div>
                <h3 className="font-bold md:text-3xl md:font-bold">
                  Track company-wide progress
                </h3>
              </div>

              <p className="md:text-xl md:font-normal opacity-70 mt-4 md:mt-6 md:w-10/12">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </MotionWrapperright>
          </div>

          <div className="mt-10">
            <div className="md:hidden flex items-center gap-4 bg-base-orange pr-px-4  rounded-l-full w-full">
              <div className="bg-primary-orange text-white font-semibold w-14 h-10 flex items-center justify-center rounded-full">
                02
              </div>
              <h3 className="font-semibold text-md">
                Advanced built-in reports
              </h3>
            </div>
            <MotionWrapperright
              animateNow={isInView}
              className=""
              stagger={0.5}
              duration={2}
            >
              <div className="hidden md:flex gap-6">
                <div className="bg-primary-orange text-white font-semibold w-16 h-12 px-5 py-3 rounded-full flex items-center justify-center">
                  02
                </div>
                <h3 className="font-bold md:text-3xl md:font-bold">
                  Advanced built-in reports
                </h3>
              </div>

              <p className="md:text-xl md:font-normal opacity-70 mt-4 md:mt-6 md:w-10/12">
                Set internal delivery estimates and track progress toward
                company goals. Our customizable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </MotionWrapperright>
          </div>

          <div className="mt-10">
            <div className="md:hidden flex items-center gap-4 bg-base-orange pr-px-4  rounded-l-full w-full">
              <div className="bg-primary-orange text-white font-semibold w-14 h-10 flex items-center justify-center rounded-full">
                03
              </div>
              <h3 className="font-semibold text-md">
                Everything you need in one place
              </h3>
            </div>
            <MotionWrapperright
              animateNow={isInView}
              className=""
              stagger={0.5}
              duration={3}
            >
              <div className="hidden md:flex gap-6">
                <div className="bg-primary-orange text-white font-semibold w-16 h-12 px-5 py-3 rounded-full flex items-center justify-center">
                  03
                </div>
                <h3 className="font-bold md:text-3xl md:font-bold">
                  Everything you need in one place
                </h3>
              </div>

              <p className="md:text-xl md:font-normal opacity-70 mt-4 md:mt-6 md:w-10/12">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </MotionWrapperright>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
