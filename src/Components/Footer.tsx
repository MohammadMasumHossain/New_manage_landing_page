import React from 'react';
import logo from "../assets/logo.svg"
import facebook from "../assets/icon-facebook.svg"
import youtube from "../assets/icon-youtube.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import instagram from "../assets/icon-instagram.svg"        


const Footer = ({}) => {
    return (
        <div className='bg-black flex justify-between px-26 w-full h-40'>
            {/* first div */}
            <div>
                 <div className="pt-10  text-gray-700">
                    <img className="text-gray-700" src={logo} alt="logo" />
                 </div>

                 <div className='flex mt-8 gap-4'>
                    <img src={facebook} alt="facebook" />
                    <img src={youtube} alt="youtube" />
                    <img src={twitter} alt="twitter" />
                    <img src={pinterest} alt="pinterest" />
                    <img src={instagram} alt="instagram" />
                 </div>
            </div>


            {/* second div */}
            <div className='text-white pt-10  text-semibold '>
                 <ul >
                    <li>Home</li>
                    <li>pricing</li>
                    <li>products</li>
                    <li>about us</li>
                 </ul>
            </div>

            {/* third div */}
            <div className='text-white pt-10  text-semibold '> 
                   <ul >
                    <li>Careers</li>
                    <li>Community</li>
                    <li>Privacy Policy</li>
                    
                 </ul>
            </div>

            {/* fourth div */}
            <div>
                <input className='text' type="text" />
            </div>
        </div>
    );
};

export default Footer;