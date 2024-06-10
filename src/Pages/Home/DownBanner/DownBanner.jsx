import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn, FaWarehouse } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const DownBanner = () => {
    return (
        <div>
             <div className="hero min-h-screen bg-base-200 mb-10">
                    <div className="hero-content flex-col lg:flex-row justify-between">
                        <img src="https://i.ibb.co/N78YLZq/empty-drugstore-with-bottles-packages-full-with-medicaments-retail-shop-shelves-with-pharmaceutical.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="lg:text-5xl text-3xl font-bold text-orange-500">Medi-Shop</h1>
                            <p className="mt-5 text-gray-500">Multi-Vendor Medicine Stor</p>
                            <h1 className="lg:text-4xl text-2xl font-semibold text-orange-400">Our Physical Outlet</h1>
                            <div className="mt-5">
                                <p className="flex gap-3"><FaWarehouse />98/7 shegun bagicha</p>
                                <p className="font-bold">motijheel,Dhaka, Bangladesh</p>
                            </div>

                            <h1 className="lg:text-4xl text-2xl font-semibold text-orange-400 mt-10">Connect With Us---</h1>
                            <div className="mt-5 flex gap-5">
                                <p className=" text-2xl flex gap-3">
                                    <NavLink to='www.linkedin.com/in/zarin-shazi'><FaLinkedinIn /></NavLink>
                                </p>
                                <p className=" text-2xl flex gap-3">
                                    <NavLink to='https://www.facebook.com/zarin.shazi.3'><FaFacebookSquare /></NavLink>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default DownBanner;