import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import SocialLogin from "./SocialLogin";


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    

    // const form = location.state?.form?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "User Login SuccessFull",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
            //   navigate(from, {replace:true});
        })
    }
        
    return (
        <div>

<div className="hero min-h-screen bg-orange-50">
                <div className="hero-content flex gap-10 flex-col lg:flex-row">
                    <div>
                    <img className='w-[600px] ' src="https://i.ibb.co/N78YLZq/empty-drugstore-with-bottles-packages-full-with-medicaments-retail-shop-shelves-with-pharmaceutical.jpg" alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                        onSubmit={handleLogin}
                        className="card-body">
                            <h2 className='text-3xl font-bold text-orange-400'>MediShop || <span className='text-[#05b37e]'>Login</span></h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                name='email'
                                type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                name='password'
                                type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#05b37e] text-white ">Login</button>
                            </div>
                            {/* {
                                wrong? <>
                                <p className='text-red-600 text-center'>{wrong}</p>
                                </>
                                :
                                <>
                                </>
                            } */}
                            <p>New in our website? Please <Link to="/signup" className='text-[#05b37e]'>SignUp</Link></p>
                        </form>
                        <div className='divider'></div>
                        <div className='flex justify-center items-center'>
                        {/* <SocialLogin></SocialLogin> */}
                        <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Login;