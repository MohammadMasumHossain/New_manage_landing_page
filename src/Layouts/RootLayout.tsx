import Branding from "../Components/Branding";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import MainContent from "../Components/MainContent";

import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";

const RootLayout = () => {
  return (
    <section>
      <div className="  px-10 md:px-26 ">
        <div className="relative">
          <div className="bg-[url('/bg-tablet-pattern.svg')] -mt-90 md:-mt-60    md:ml-54 z-[-1] md:h-[856px] md:w-[1220px]  h-[850px] w-[830px] absolute bg-no-repeat bg-top-right"></div>
          <Navbar />
          <Hero />
        </div>

        <div className="relative">
          <div className="bg-[url('/bg-tablet-pattern.svg')] ml-30 -mt-120 md:-ml-60  z-[-1] md:mt-120  md:h-[756px] md:w-[420px] h-[850px] w-[830px]   absolute bg-no-repeat bg-top-right" />
          <MainContent/>

          <Testimonial/>
        </div>
      </div>

      <Branding></Branding>

      <Footer></Footer>
    </section>
  );
};

export default RootLayout;
