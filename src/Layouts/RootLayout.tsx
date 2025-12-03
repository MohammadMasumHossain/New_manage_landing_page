import Branding from "../Components/Branding";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import MainContent from "../Components/MainContent";

import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";

const RootLayout = () => {
  return (
    <div>
      <div className=" px-10 md:px-26">
        {/* <Navbar></Navbar> */}
        <Hero></Hero>
        <MainContent></MainContent>
      </div>

      <Branding></Branding>
      <Testimonial></Testimonial>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
