import { Link, NavLink } from "react-router-dom";
import { FaHouseMedical } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut, addMedicine } = useContext(AuthContext);
  // const [cart] = useCart();

  const handleLogout = () => {
    logOut();
  }
  const links = (
    <>
      <li className="font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/shop">Shop</NavLink>
      </li>

      <li>
        <Link to="/cart">
          <button className="btn bg-[#05b37e]">
            <p className="mr-2"><FaShoppingCart /></p>
            <div className="badge  badge-secondary">{addMedicine.length ? addMedicine.length : 0}+cart</div>
          </button>
        </Link>
      </li>
      <li className="font-semibold">
        <NavLink to="/about">About</NavLink>
      </li>

    </>
  );
  return (
    <div>
      <div className="shadow-2xl">
        <div className="navbar bg-[#05b37e] px-10 text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#05b37e] rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            {/* <Link>
                            <img className="h-[80px] rounded-full" src='https://i.ibb.co/fv9mRdw/Speedy-Send.png' alt="" />
                            
                        </Link> */}
            <div className="flex items-center gap-2">
              <h2 className="text-2xl">
                <FaHouseMedical />
              </h2>
              <h2 className="text-xl font-semibold text-orange-500 hidden md:block">
                Medi-Shop
              </h2>
            </div>
            {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
          </div>
          <div className="navbar-end">
            <div className="indicator mr-4">

              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Language</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-[#05b37e] shadow rounded-box w-52">
                  <li><a>Bangla</a></li>
                  <li><a>English</a></li>
                </ul>
              </div>
            </div>
            {user ? (
              <>

                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img className="rounded-full flex justify-center items-center mx-auto" src={user.photoURL} alt="user profile" />
                    </div>
                  </label>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li><button className="text-red-600 font-bold" onClick={handleLogout}>Log Out</button></li>
                    <Link to='/userUpdateProfile'><li><h2 className='text-green-500 font-semibold'>update profile</h2></li></Link>
                    <Link to='/dashboard'><li><h2 className='text-green-500 font-semibold'>Dashboard</h2></li></Link>
                    <p className='ml-3'>
                      <div className="justify-between">
                        <h2 className='text-green-500 font-semibold'>{
                          user.displayName}</h2>
                      </div>
                    </p>

                  </ul>
                </div>

              </>
            ) : (
              <NavLink to='/login' className="btn btn-outline btn-warning">Join Us</NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;