import anishaimg from "../assets/avatar-anisha.png";
import aliimg from "../assets/avatar-ali.png";
import richardimg from "../assets/avatar-richard.png";
import shanaiimg from "../assets/avatar-shanai.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Anisha Li",
      testimonial:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      image: anishaimg,
    },
    {
      id: 2,
      name: "Ali Bravo",
      testimonial:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
      image: aliimg,
    },
    {
      id: 3,
      name: "Richard Watts",
      testimonial:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      image: richardimg,
    },
    {
      id: 4,
      name: "Shanai Gough",
      testimonial:
        "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
      image: shanaiimg,
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="mt-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
          What They've Said
        </h2>
      </div>
      <div className=" m-auto">
        <div className="mt-10 slider-container mb-10">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="pt-10 ">
                <div className="bg-red-50 h-60   text-gray-500 roundex-xl">
                  <div className="h-16 rounded-t-xl  relative flex justify-center items-center">
                    <img
                      src={d.image}
                      className="h-16 w-16 absolute left-1/2 -translate-x-1/2 -mt-10 rounded-full  "
                      alt="image"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <h2 className="font-semibold text-lg text-gray-800">
                      {d.name}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed opacity-80">
                      {d.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="text-center mt-12 mb-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="px-6 py-3 bg-[#f25f3a] text-white rounded-full font-semibold hover:bg-[#d94f2f] transition-colors"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Testimonial;
