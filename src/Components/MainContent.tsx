const MainContent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-">
      <div className=" mt-20 md:mt-40">
        <div className="font-bold lg:font-black text-4xl lg:text-4xl text-gray-700">
          <h3 className="w-full text-center lg:text-start  ">
            what's different about Manage?
          </h3>
        </div>
        <div className="mt-8 text-center lg:text-start md:text-xl  md:mt-10 text-gray-500">
          <p>
            Manage provides all the functionality your team needs,
            without the complexity. Our software is tailor-made for
            modern digital  product teams.
          </p>
        </div>
      </div>

      <div className=" mt-10 md:ml-30 md:mt-40">
        <div className="flex gap-6 ">
          <div className="bg-orange-500 text-white font-semibold md:font-bold w-16 h-12 px-5 py-3 rounded-l-full rounded-r-full">
            {" "}
            01{" "}
          </div>
          <div>
            <h3 className="font-bold md:text-3xl md:font-bold  text-gray-700">
              Track company-wide progress
            </h3>
            <p className="text-gray-500 md:text-xl md:font-normal mt-6 w-full  md:w-10/12">
              See how your day-to-day tasks fit into the wider vision.
              Go from tracking progress at the milestone level all the 
              way done to the smallest of details. Never lose sight of 
              the bigger picture again.
            </p>
          </div>
        </div>

        <div className="flex gap-6 mt-10">
          <div className="bg-orange-500 text-white font-semibold w-16 h-12 px-5 py-3 rounded-l-full rounded-r-full">
            {" "}
            02{" "}
          </div>
          <div>
            <h3 className="font-bold md:text-3xl md:font-bold text-gray-700">
              Advanced built-in reports
            </h3>
            <p className="text-gray-500 md:text-xl md:font-normal w-full  mt-6 ">
              {" "}
              Set internal delivery estimates and track progress toward{" "}
              company goals. Our customisable dashboard helps you{" "}
               build out the reports you need to keep key stakeholders{" "}
              informed.
            </p>
          </div>
        </div>

        <div className="flex gap-6 mt-10">
          <div className="bg-orange-500 text-white font-semibold w-16 h-12 px-5 py-3 rounded-l-full rounded-r-full">
            {" "}
            03{" "}
          </div>
          <div>
            <h3 className="font-bold md:text-3xl md:font-bold text-gray-700">
              {" "}
              Everything you need in one place
            </h3>
            <p className="text-gray-500 md:text-xl md:font-normal w-full mt-6 ">
              Stop jumping from one service to another to  communicate,
              store files, track tasks and share  documents. Manage
              offers an all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
