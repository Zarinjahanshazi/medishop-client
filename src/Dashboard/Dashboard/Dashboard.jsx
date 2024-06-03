import { AiFillMedicineBox } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { MdOutlinePayment } from "react-icons/md";
import { RiAdvertisementFill, RiHome8Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>

<div className="flex flex-col md:flex-row gap-10 md:mx-20">
            {/* Mobile Sidebar Toggle Button */}
            {/* <button
                className="md:hidden fixed top-4 right-4 p-2"
                onClick={() => setShowSidebar(!showSidebar)}
            >
                {showSidebar ? <IoIosCloseCircle /> : <IoMenu />}
            </button> */}

            {/* Sidebar */}
            {/* <div
                className={`md:w-60 w-32 shadow-2xl md:shadow-none rounded-b-lg md:rounded-b-none md:min-h-screen bg-orange-200 ${showSidebar ? "block" : "hidden"
                    } md:block`}
            > */}
            <div>
                <div>
                    <img
                        className="md:w-3/4 w-1/2 mx-auto h-1/2  rounded-full"
                        src="https://i.ibb.co/99sqTLC/logo1.png"
                        alt=""
                    />
                </div>
                <ul className="menu md:p-2 p-0 md:text-lg text-xs">
                    {/* {logged?.role === 'user' && (
                        <>
                            <h2 className="md:text-xl text-xs font-bold text-center">User</h2>
                            <li><NavLink to='/dashboard/book'><FaBook /> Book a Parcel</NavLink></li>
                            <li><NavLink to='/dashboard/myparcel'><RiRedPacketFill /> My Parcel </NavLink></li>
                            <li><NavLink to='/dashboard/profile'><FaUserCircle /> My Profile</NavLink></li>
                        </>
                    )} */}
                    
                        <>
                            <h2 className="md:text-xl text-xs font-bold text-center">User</h2>
                            <li><NavLink to='/dashboard/paymentHistory'><MdOutlinePayment />Payment History</NavLink></li>
                            
                        </>
                   
                    {/* {logged?.role === 'admin' && (
                        <>
                            <h2 className="md:text-xl text-xs font-bold text-center">Admin</h2>
                            
                            <li><NavLink to='/dashboard/allparcels'><RiRedPacketFill /> Parcels</NavLink></li>
                            <li><NavLink to='/dashboard/alldeliverymen'><GrUserWorker /> Delivery Men</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaPeopleGroup /> Users</NavLink></li>
                        </>
                    )} */}
                    
                        <>
                            <h2 className="md:text-xl text-xs font-bold text-center">Admin</h2>
                            
                            <li><NavLink to='/dashboard/manageUsers'><FaUser></FaUser> Manage Users</NavLink></li>
                            <li><NavLink to='/dashboard/manageCategory'><BiCategory />Manage Category</NavLink></li>
                            <li><NavLink to='/dashboard/paymentManagement'><MdOutlinePayment />Payment Management</NavLink></li>
                            <li><NavLink to='/dashboard/salesReport'><FcSalesPerformance />Sales Report </NavLink></li>
                            <li><NavLink to='/dashboard/manageBannerAdvertise'><RiAdvertisementFill />Manage Banner Advertises</NavLink></li>
                        </>
                   
                    {/* {logged?.role === 'deliverymen' && (
                        <>
                            <h2 className="md:text-xl text-xs font-bold text-center">Delivery Man</h2>
                            <div className="divider"></div>
                            <li><NavLink to='/dashboard/mydelivery'><FaToolbox /> My Delivery</NavLink></li>
                            <li><NavLink to='/dashboard/reviews'><RiFeedbackFill /> Reviews</NavLink></li>
                        </>
                    )} */}
                   
                    
                        <>
                            <h2 className="md:text-xl text-xs font-bold text-center">Seller</h2>
                            <div className="divider"></div>
                            <li><NavLink to='/dashboard/manageMedicines'><AiFillMedicineBox />Manage Medicine</NavLink></li>
                            <li><NavLink to='/dashboard/sellerPaymentHistory'><MdOutlinePayment />Seller Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/askForAdvertisement'><RiAdvertisementFill />Ask For Advertisement</NavLink></li>
                        </>
                   
                    <div className="divider"></div>
                    <li><NavLink to='/'><RiHome8Fill /> Home</NavLink></li>
                </ul>
            </div>


            {/* Main Content */}
            <div className="flex-1">
                
                <Outlet></Outlet>
            </div>
        </div>
            
        </div>
    );
};

export default Dashboard;