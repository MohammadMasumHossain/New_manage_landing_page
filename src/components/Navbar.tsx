//
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import  Button from "./ui/Button";
import { NavLink } from "react-router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  useEffect(() => {    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 
  return (
    <>
      <div className= {`${isScrolled? "bg-white shadow-navbar " : "bg-transparent"} sticky top-0 z-50`}  >
        
        <div className="flex max-w-[1500px] w-[80%] mx-auto  justify-between gap-8 items-center mt-4 py-6  ">
        <div>
          <img className="  min-w-32  lg:w-40 h-auto"  src={logo} alt="logo" />
        </div>

        <ul className="hidden lg:flex gap-6 text-gray-700 font-semibold">
          
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Pricing</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Product</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">About us</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Careers</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Community</NavLink>
          
        </ul>

        {/* Desktop Button */}
        <div className="hidden text-white lg:block">
          <Button bgcolor="bg-primary-orange"/>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          {!nav ? (
            <img
              className="lg:hidden w-8 "
              onClick={showNav}
              src={hamburger}
              alt="menu"
            />
          ) : (
            <img
              className="lg:hidden w-8 fixed top-6 right-16 "
              onClick={showNav}
              src={close}
              alt="close"
            />
          )}
        </div>
      </div>
      </div>

      {/* mobile menu */}
      <nav
        className={`lg:hidden absolute -top-20 right-0 h-full w-full  z-40 flex flex-col items-center justify-center gap-10 text-xl font-semibold transition-all duration-700 ${
          nav ? "translate-x-0" : "translate-x-full hidden"
        }`}
      >
        <ul className="flex flex-col gap-4  px-20 py-20  bg-gray-50  text-gray-700">
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Pricing</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Product</NavLink>
          <NavLink to="max-w-[1500px]#" className="text-primary-blue hover:opacity-50">About us</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Careers</NavLink>
          <NavLink to ="#" className="text-primary-blue hover:opacity-50">Community</NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
