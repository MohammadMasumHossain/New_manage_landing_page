import Button from "./ui/Button";

const Branding = () => {
  return (
    <div className="bg-orange-500 flex-col md:flex-row mt-10 md:mt-26 px-26 max-w-full justify-between flex items-center  h-50 md:h-30">
      <div>
        <p className=" text-white text-center font-extrabold mt-4 ml-6 md:-mt-2 justify-center  md:10/12 text-2xl md:text-3xl ">
          Simplify how your team  works today.
        </p>
      </div>
      <div className="mb-8 text-black  md:mb-0 ">
        <Button  bgcolor="bg-white" />
      </div>
    </div>
  );
};

export default Branding;
