import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import getImageIlink from './../../../utils/getImageIlink';
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Pages/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const AskForAdvertisement = () => {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState({})
  const { user } = useContext(AuthContext)
  const { data: applyData = [], refetch } = useQuery({
    queryKey: ['getAd'],
    enabled: !!user?.email,
    queryFn: async () => {
       
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/getAd?email=${user?.email}`, {
          headers: { Authorization: localStorage.getItem('accessToken') }
        });
        return res.data;
     

    },
  })
  const { data: sellerMedicines = [], } = useQuery({
    queryKey: ['categoriesOfSeller', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/categoriesOfSeller?email=${user?.email}`, {
        headers: { Authorization: localStorage.getItem('accessToken') }
      });
      return res.data;
    },

  })
  console.log(sellerMedicines);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async (data) => {
    if (user.email) {
      const res = await getImageIlink(data?.image)
      if (res) {
        setShowModal(false)
        data.bannerImg = res
        data.SellerEmail = user?.email
        data.status = "pending"
        data.categoryId = category._id
        data.image = category.image
        data.medicine_name = category.medicine_name
        console.log(data);
        const res2 = await axios.post(`${import.meta.env.VITE_SERVER_URL}/AddAD`, data)
        if (res2) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Apply for Add Succefully",
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
          reset()
          console.log(res2);
        }
      }
    }
    else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error is required",
        showConfirmButton: false,
        timer: 1500
      });
    }

  }
  console.log(applyData);
  return (
    <div>


      {/* Modal */}
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
                    Add apply for Ad
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    {/* <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"> */}
                    X
                    {/* </span> */}
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">Description</h3>
                    <input
                      type="text"
                      placeholder="description"
                      className="input input-bordered w-full max-w-xs"
                      {...register("description", { required: true })}
                    />
                    {errors.description && <span className="block">Discripton required</span>}
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Pick a image</span>
                      </div>
                      <input
                        type="file"
                        className="file-input file-input-bordered w-full max-w-xs"
                        {...register("image", { required: true })}
                      />
                      {errors.image && <span>This field is required</span>}
                    </label>
                    <button className="btn">Add</button>
                  </form>
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
      }


      {/* table */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Company Name</th>
              <th>Medicine Name</th>
              <th>Category</th>
              <th>Mass units</th>
              <th>Apply</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              sellerMedicines?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item?.company_name}</td>
                  <td>{item?.medicine_name}</td>
                  <td>{item?.category}</td>
                  <td>{item?.itemMassUnits}</td>
                  <td className="btn btn-primary" onClick={() => {
                    setCategory(item)
                    setShowModal(true)
                  }}>appy AD</td>
                  <td>{applyData?.map(i => i.categoryId === item._id && i.status)}</td>
                </tr>
              ))

            }

          </tbody>


        </table>
      </div>
    </div >
  );
};

export default AskForAdvertisement;