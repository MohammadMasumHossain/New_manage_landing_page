
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div className=' px-26'>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
};

export default RootLayout;