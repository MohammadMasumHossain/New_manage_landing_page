import Bgimage from "./shared/images/Bgimage";
import Button from "./ui/Button";


const Branding = () => {
  return (
    <div className="relative overflow-y-clip overflow-x-clip">
      <div className="z-0 md:h-212 w-full md:w-fit md:-top-36  md:-left-4 -left-160  top-0  h-172 absolute ">
        {/* md:-top-96 -top-80  md:-right-46 -right-68 md:bottom-25  md:-left-110 */}
        <div className="h-full  w-auto">
          <Bgimage/>
        </div>
        
      </div>
      <div className=" hidden lg:block z-0 md:h-212 w-full md:w-fit lg:-top-170  lg:-right-140 h-172 absolute ">
        {/* md:-top-96 -top-80  md:-right-46 -right-68 md:bottom-25  md:-left-110 */}
        <div className="h-full  w-auto">
          <Bgimage/>
        </div>
        
      </div>
     <div className="bg-primary-orange">
       <div className="max-w-[1500px] w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center h-120 md:h-50 mt-10 md:mt-26 ">
        <div className="relative z-20">
          <p className=" text-white lg:text-start text-center pt-26 md:pt-0  font-extrabold mt-4  md:-mt-2 justify-center w-full md:w-11/12 text-4xl md:text-4xl ">
            Simplify how your team works today.
          </p>
        </div>
        <div className="mb-8 text-black pt-20 md:pt-0 md:mb-0 ">
          <Button bgcolor="bg-white" />
        </div>
      </div>
     </div>
    </div>
  );
};

export default Branding;
