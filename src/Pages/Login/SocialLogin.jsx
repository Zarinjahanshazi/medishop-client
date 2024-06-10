import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    // const axiosPublic = useAxiosPublic();
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(async result => {
                console.log(result.user);
                navigate(from, { replace: true })
                const userInfo = {
                    email: result?.user?.email,
                    name: result?.user?.displayName,
                    photo: result?.user?.photoURL,
                    role: 'user'

                };
                const res2 = await axios.post(`${import.meta.env.VITE_SERVER_URL}/users`, userInfo)
                console.log(res2);
                if (res2.data.insertedId) {
                    console.log("user added to the database");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Created successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate("/");
                }
            })
    }

    return (
        <div>

            <button onClick={handleGoogleSignIn} className="btn btn-outline text-green-500 btn-info mb-5">
                <FaGoogle></FaGoogle>
                Google
            </button>

        </div>
    );
};

export default SocialLogin;