import Logowhite from "./Logowhite";
import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-black flex flex-col-reverse  md:flex-row items-center justify-between px-26 w-full pb-10 md:h-50">
        {/* first div */}
        <div className="flex flex-col-reverse  items-center md:flex-col ">
          <div className="pt-10  text-gray-700">
            <Logowhite />
          </div>

          <div className="flex mt-8 gap-4 space-x-4 ">
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>

        {/* second div */}
        <div className="flex gap-20  md:gap-40 mt-4 md:mt-8">
          <div className="text-white pt-10   text-semibold ">
            <ul className="space-y-4 ">
              <li>Home</li>
              <li>pricing</li>
              <li>products</li>
              <li>about us</li>
            </ul>
          </div>

          {/* third div */}
          <div className="text-white pt-10  text-semibold ">
            <ul className="space-y-4">
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
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

            <button className="bg-orange-500 text-white px-5 py-2 rounded-full h-10 hover:bg-red-600">
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
