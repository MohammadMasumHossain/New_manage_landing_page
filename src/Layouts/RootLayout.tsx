
import Hero from '../Components/Hero';
import MainContent from '../Components/MainContent';

import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div className=' px-26'>
            <Navbar></Navbar>
            <Hero></Hero>
            <MainContent></MainContent>
        </div>
    );
};

export default RootLayout;