
import { useContext, useState } from "react";
import { AuthContext } from "../../../Pages/Providers/AuthProvider";
import useUsers from "../../../hooks/useUsers";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useGetMe from "../../../hooks/geMe";
import { useForm } from "react-hook-form";
import getImageIlink from "../../../utils/getImageIlink";
import axios from "axios";
import Swal from "sweetalert2";

const UserUpdateProfile = () => {
    const [isImageChange, setIsImageChange] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext)
    const [meData, , refetch] = useGetMe(user?.email)
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        if (isImageChange) {
            const res = await getImageIlink(data.image)
            data.photo = res
        }
        else {
            data.photo = meData?.photo

        }
        if (!data?.name) {
            delete data.name
        }
        if (!data?.phone) {
            delete data.phone
        }
        console.log(data);
        if (data?.photo && meData?._id) {
            const res2 = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/updateMe/${meData?._id}`, data, {
                headers: { Authorization: localStorage.getItem('accessToken') }
            });
            if (res2) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Update Profile",
                    showConfirmButton: false,
                    timer: 1500
                });
                setShowModal(false)
                setIsImageChange(false)
            }
            console.log(res2);
            refetch()
            reset()
        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Something is Wrong",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <div className="bg-green-500 text-gray-700  pb-8 shadow-2xl rounded-3xl md:ml-10 ">
                <div className="flex md:ml-20 my-20 pt-20">

                    <div className="w-68 p-8">
                        <img className="h-[80px] w-[80px] shadow-2xl md:rounded-2xl rounded-full mx-auto" src={meData?.photo} alt="" />
                    </div>
                    <div className="flex-1 border-1">
                        <h2 className="bg-yellow-200 mt-8 md:w-1/2 w-3/4 p-2 rounded-xl font-bold md:text-2xl text-md">Name : {meData?.name}</h2>
                        <h2 className="bg-yellow-200 mt-8 md:w-1/2 w-3/4 p-2 rounded-xl font-se,mibold text-xl">Email : {meData?.email}</h2>
                        <h2 className="bg-yellow-200 mt-8 md:w-1/2 w-3/4 p-2 rounded-xl font-se,mibold text-xl">Phone : {meData?.phone}</h2>
                        <button onClick={() => setIsImageChange(!isImageChange)} className="block btn mt-8">{!isImageChange ? 'isImageChange' : 'changing'}</button>
                        <button
                            className="bg-pink-500 mt-4 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            Open regular modal
                        </button>

                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                    Update Profile
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => {
                                                        setShowModal(false)
                                                        setIsImageChange(false)
                                                    }}
                                                >
                                                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <input type="text" placeholder="Name"
                                                        {...register("name",)}
                                                        className=" block input input-bordered w-full max-w-xs" />
                                                    <input
                                                        {...register("phone",)} type="text" placeholder="Phone" className=" block input input-bordered w-full max-w-xs" />
                                                    {
                                                        isImageChange && <input
                                                            type="file"
                                                            className="mt-4"
                                                            {...register("photo")}

                                                        />
                                                    }
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                            {/*footer*/}

                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UserUpdateProfile;