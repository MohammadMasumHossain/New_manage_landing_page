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
      <div>
        <Navbar />
        <section className="vietnamsans ">
          <Hero />
          <div>
            <div className="relative px-2 ">
              <MainContent />
              <Testimonial />
            </div>
          </div>
        </section>
        <Branding></Branding>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default RootLayout;
