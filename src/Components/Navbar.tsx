
import logo from "../assets/logo.svg";
const Navbar = () => {
    return (
        <nav className=" flex justify-between items-center py-6 px-16">
            <div>
                <img src={logo} alt="logo" /> 
            </div>

            <div className="flex gap-4">
                 <ul className="flex gap-6">
                    <li className="">Pricing</li>
                    <li>Product</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Community</li>
                 </ul>
                    
                
            </div>
            <div>
                <button className=" bg-orange-500 hover:bg-orange-400 text-white font-semibold w-40 h-12 px-8 py-2 rounded-l-full rounded-r-full">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;