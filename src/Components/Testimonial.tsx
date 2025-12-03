import React from 'react';
import anishaimg from "../assets/avatar-anisha.png";
import aliimg from "../assets/avatar-ali.png";
import richardimg from "../assets/avatar-richard.png"; 
import shanaiimg from "../assets/avatar-shanai.png"; 
import { Swiper, SwiperSlide } from 'swiper/react';

  
const Testimonial = () => {

    const testimonialsData = [
        
        {
            id:1,
            name: "Anisha Li",
            testimonial: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
            image: anishaimg,
        },
        {
            id:2,
            name: "Ali Bravo",
            testimonial: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
            image: aliimg,
        },
        {
            id:3,
            name: "Richard Watts",
            testimonial: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
            image: richardimg,
        },
        {
            id:4,
            name: "Shanai Gough",
            testimonial: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
            image: shanaiimg,  
        }
    ]

    return (
       <Swiper
        spaceBetween={50}
        slidesPerView={1}
       
        >
       
        {testimonialsData.map(({id, name, testimonial, image}) => (
            <SwiperSlide key={id} >
            <div className="flex flex-col mb-20 w-20 bg-gray-500 h-20  items-center text-center px-6 md:px-0 md:w-2/4 mx-auto py-10">
                <div className=''>
                    <img src={image} alt={name} className="w-16 h-16 mb-6"/>
                <p className="text-gray-600 mb-6">{testimonial}</p>
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                </div>

                
            </div>
            </SwiperSlide>
        ))} 
       </Swiper>
    );
};

export default Testimonial;