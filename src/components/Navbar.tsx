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
        
        <div className="flex   max-w-7xl mx-auto  justify-between gap-8 items-center py-6 px-4 md:px-12">
        <div>
          <img className="w-40 h-auto" src={logo} alt="logo" />
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-semibold">
          
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Pricing</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Product</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">About us</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Careers</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Community</NavLink>
          
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {!nav ? (
            <img
              className="md:hidden w-8 "
              onClick={showNav}
              src={hamburger}
              alt="menu"
            />
          ) : (
            <img
              className="md:hidden w-8 fixed top-6 right-6 "
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
        className={`md:hidden absolute top-16 right-0 h-full w-full  z-40 flex flex-col items-center justify-center gap-10 text-xl font-semibold transition-all duration-700 ${
          nav ? "translate-x-0" : "translate-x-full hidden"
        }`}
      >
        <ul className="flex flex-col gap-4  px-20 py-20 -mt-78 bg-gray-100  text-gray-700">
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Pricing</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Product</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">About us</NavLink>
          <NavLink to="#" className="text-primary-blue hover:opacity-50">Careers</NavLink>
          <NavLink to ="#" className="text-primary-blue hover:opacity-50">Community</NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
