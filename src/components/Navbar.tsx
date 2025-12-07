//
import { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import  Button from "./ui/Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex   relative justify-between gap-8 items-center py-6 px-4 md:px-12">
        <div>
          <img className="w-40 h-auto" src={logo} alt="logo" />
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-semibold">
          <li className="relative after:absolute ">Pricing</li>
          <li>Product</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Community</li>
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
      </nav>

      {/* mobile menu */}
      <nav
        className={`md:hidden absolute top-16 right-0 h-full w-full  z-40 flex flex-col items-center justify-center gap-10 text-xl font-semibold transition-all duration-700 ${
          nav ? "translate-x-0" : "translate-x-full hidden"
        }`}
      >
        <ul className="flex flex-col gap-4  px-20 py-20 -mt-78 bg-gray-100  text-gray-700">
          <li>Pricing</li>
          <li>Product</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
