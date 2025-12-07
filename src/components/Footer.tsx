import Logowhite from "./Logowhite";





import { NavLink } from "react-router";
import Facebook from "./shared/icons/Facebook";
import Youtube from "./shared/icons/Youtube";
import Twitter from "./shared/icons/Twitter";
import Pinterest from "./shared/icons/Pinterest";
import Instragram from "./shared/icons/Instragram";


const Footer = () => {
  return (
    <>
      <footer className="bg-black flex flex-col-reverse  md:flex-row items-center justify-between px-26 w-full pb-10 md:h-50">
        {/* first div */}
        <div className="flex flex-col-reverse  md:items-start items-center md:flex-col ">
          <div className="pt-10  text-gray-700">
            <Logowhite />
          </div>

          <div className="flex mt-8 gap-4 space-x-4 ">
            <NavLink to="#"  ><Facebook  /></NavLink>
            <NavLink to="#"><Youtube /></NavLink>
            <NavLink to="#" > <Twitter/></NavLink>
            
            <NavLink to="#"><Pinterest/></NavLink>
            <NavLink to="#"><Instragram/></NavLink>
          </div>
        </div>

        {/* second div */}
        <div className="flex gap-20  md:gap-40 mt-4 md:mt-8">
          <div className="text-white pt-10   text-semibold ">
            <ul className="space-y-4 flex flex-col">
              <NavLink to="#" className="hover:text-primary-orange ">Home</NavLink>
              <NavLink to="#"className="hover:text-primary-orange ">Pricing</NavLink>
              <NavLink to="#" className="hover:text-primary-orange ">Products</NavLink>
              <NavLink to="#" className="hover:text-primary-orange ">About us</NavLink>
            </ul>
          </div>
              
          

          {/* third div */}
          <div className="text-white pt-10  text-semibold ">
            <ul className="space-y-4 flex flex-col">
              <NavLink to="#" className="hover:text-primary-orange ">Careers</NavLink>
              <NavLink to="#"className="hover:text-primary-orange ">Community</NavLink>
              <NavLink to="#"className="hover:text-primary-orange ">Privacy Policy</NavLink>
              
            </ul>
          </div>
        </div>

        {/* fourth div */}
        <div className="mt-10 flex flex-col items-start">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Updates in your inbox…"
              className="px-4 py-2 bg-white rounded-full text-black outline-none h-10 w-60"
            />

            <button className="bg-primary-orange text-white px-5 py-2 rounded-full h-10 hover:opacity-95">
              Go
            </button>
          </div>

          <div className="hidden lg:block">
            <p className="text-white text-sm mt-6 ml-4 opacity-70">
              Copyright 2020. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-black flex justify-center lg:hidden pb-6">
        <p className="text-white text-sm mt-3 opacity-70">
          Copyright 2020. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
