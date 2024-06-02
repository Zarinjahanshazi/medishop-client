import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Signup = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm();

      const {createUser, user, updateUserProfile} = useContext(AuthContext);

      const navigate = useNavigate();

      const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photo, data.phone)
            .then(() => {
                //create user entry in the database
                const userInfo = {
                  name: data.name,
                  email: data.email,
                };
                axiosPublic.post("/users", userInfo).then((res) => {
                  if (res.data.insertedId) {
                    console.log('user added to the database');
      
                    reset();
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "User Created successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate("/");
                  }
                });
              })
            .catch(error => console.log(error))
        })

        // fetch('https://speedy-send-server.vercel.app/users', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json' 
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })
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
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body">
                            <h2 className='text-3xl font-bold text-orange-400'>Speedy Sent || <span className='text-[#05b37e]'>SignUp</span></h2>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input 
                                {...register("name", { required: true })}
                                name='name'
                                type="text" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input 
                                {...register("phone", { required: true })}
                                name='phone'
                                type="text" placeholder="Your Phone Number" className="input input-bordered" />
                                {errors.phone && <span className='text-red-600'>Phone Number is required</span>}
                            </div>

                            

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input 
                                {...register("photo", { required: true })}
                                name='photo'
                                type="text" placeholder="Your image" className="input input-bordered" />
                                {errors.photo && <span className='text-red-600'>Image is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                {...register("email", { required: true })}
                                type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                {...register("password", 
                                { 
                                    required: true, 
                                    maxLength: 20, 
                                    minLength: 6, 
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ 
                                })
                                }
                                type="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#05b37e] text-white ">SignUp</button>
                            </div>
                            <p>Already Register? Please <Link to="/login" className='text-[#05b37e]'>login </Link></p>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Signup;