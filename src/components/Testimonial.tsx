import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "./ui/Button";
import { useState } from "react";
import { data, type Data } from "../constants/testimonialdata";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  var settings = {
    dots: true,

    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 100,
    cssEase: "linear",

    beforeChange: (next: number) => {
      setActiveSlide(next);
    },

    customPaging: (i: number) => (
      <div
        className={`size-2  rounded-full mt-6 border border-red-500 ${
          i === activeSlide ? "bg-primary-orange" : "bg-white"
        }`}
      ></div>
    ),

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
    <section className=" w-[95%] mx-auto">
      <div className="mt-20 ">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
          What They've Said
        </h2>
      </div>
      <div className=" m-auto">
        <div className="mt-10 slider-container mb-10">
          <Slider {...settings}>
            {data.map((d: Data) => (
              <div className="pt-10 ">
                <div className="bg-base-light-gray h-60    text-gray-500 roundex-xl">
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
      <div className="text-center text-white mt-12 mb-12">
        <Button bgcolor="bg-primary-orange"></Button>
      </div>
    </section>
  );
};

export default Testimonial;
