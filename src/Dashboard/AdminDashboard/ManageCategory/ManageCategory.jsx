import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import getImageIlink from "../../../utils/getImageIlink";
import { useState } from "react";
// import getImageIlinkForForm from "../../../utils/getImageIlinkForForm";
import getImageIlinkForForm from "../../../utils/getImagellinkForFrom";


const ManageCategory = () => {
  const [showModal, setShowModal] = useState(false);
  const [updateData, setUpdateData] = useState(null)
  const [showModals, setShowModals] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const { refetch, data: categoriesData = [], } = useQuery({
    queryKey: ['users',],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/mainCategoryForAdmin`, {
        headers: { Authorization: localStorage.getItem('accessToken') }
      });
      return res.data;
    },

  })

  const onSubmit = async (data) => {
    const image = data.image
    console.log(image);
    const res = await getImageIlink(image)
    if (res) {
      data.image = res
      // data.name 
      const res2 = await axios.post(`${import.meta.env.VITE_SERVER_URL}/maincategory`, data, {
        headers: { Authorization: localStorage.getItem('accessToken') }
      })
      if (res2.data) {
        refetch()
        setShowModal(false)
      }
    }
    console.log(data);
  }
  const handleUpdateData = async (event) => {
    event.preventDefault();
    const form = event.target
    const name = form.name.value
    const description = form.description.value
    const image = form.image.files[0]
    const res = await getImageIlinkForForm(image)

    if (res) {
      const data = { name, description, image: res }
      const res2 = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/updateMaincategory/${updateData._id}`, data,
        {
          headers: { Authorization: localStorage.getItem('accessToken') }
        }
      )
      if (res2.data) {
        refetch()
        setShowModals(false)
      }
    }
    // console.log(data);
  }
  const handleUpdate = (item) => {
    setShowModals(true)
    setUpdateData(item)
  };
  console.log(updateData);

  const handleDelete = async (id) => {
    const res2 = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/maincategory/${id}`, {
      headers: { Authorization: localStorage.getItem('accessToken') }
    })

    if (res2.data) {
      refetch()
    }
  };

  return (
    <div>

      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Category
      </button>

      {/* Modal */}

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6  mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Category
                  </h3>
                  <span onClick={() => setShowModal(false)}>X</span>
                </div>
                {/*body*/}
                <form className="ps-8" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Category Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>This Name is required</span>}
                  <textarea
                    placeholder="Description"
                    className="input input-bordered w-full max-w-xs mt-4"
                    {...register("description", { required: true })}
                  />
                  {errors.description && <span>This Name is required</span>}
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Pick a image</span>
                    </div>
                    <input
                      type="file"
                      className="file-input file-input-bordered w-full max-w-xs"
                      {...register("image", { required: true })}
                    />
                  </label>
                  {errors.image && <span>This Name is required</span>}
                  {/* if there is a button in form, it will close the modal */}

                  <button
                    className="bg-emerald-500 text-white block active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  // onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </form>
                {/*footer*/}

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Action 1</th>
              <th>Action 2</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              categoriesData?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th><img className="size-16" src={item?.image} alt="" /></th>
                  <td>{item?.name}</td>
                  <td>
                    <button
                      onClick={() => handleUpdate(item)}
                      className="btn btn-outline btn-success"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="btn btn-outline btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      {showModals ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6  mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Category
                  </h3>
                  <span onClick={() => setShowModals(false)}>X</span>
                </div>
                {/*body*/}
                <form className="ps-8" onSubmit={handleUpdateData}>
                  <input
                    type="text"
                    id="name"
                    placeholder="Category Name"
                    defaultValue={updateData?.name}
                    className="input input-bordered w-full max-w-xs"

                  />

                  <textarea
                    id="description"
                    placeholder="Description"
                    className="input input-bordered w-full max-w-xs mt-4"
                    defaultValue={updateData?.description}

                  />

                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Pick a image</span>
                    </div>
                    <input
                      type="file"
                      id="image"
                      className="file-input file-input-bordered w-full max-w-xs"

                    />
                  </label>

                  {/* if there is a button in form, it will close the modal */}

                  <button
                    className="bg-emerald-500 text-white block active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  // onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </form>
                {/*footer*/}

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default ManageCategory;