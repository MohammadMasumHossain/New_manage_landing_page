import { Outlet } from "react-router";
import Branding from "../components/Branding";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";

import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <section className="vietnamsans">
        <Hero/>
        <div>
          

          <div className="relative">
            {/* <div className="bg-[url('/bg-tablet-pattern.svg')] ml-30 -mt-120 md:-ml-60  z-[-1] md:mt-90  md:h-[756px] md:w-[520px] h-[850px] w-[830px]   absolute bg-no-repeat bg-top-right" /> */}
            <MainContent />

            <Testimonial />
          </div>
        </div>
      </section>
      <Branding></Branding>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
