

import Branding from '../Components/Branding';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import MainContent from '../Components/MainContent';

import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div >
            <div className=' px-26'>
            <Navbar></Navbar>
            <Hero></Hero>
            <MainContent></MainContent>
            </div>
            
           <Branding></Branding>

          
            <Footer></Footer>
         
            
            
        </div>
    );
};

export default RootLayout;