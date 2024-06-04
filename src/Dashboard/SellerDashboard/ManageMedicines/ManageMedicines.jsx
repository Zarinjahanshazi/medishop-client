import { useState } from "react";
import { useForm } from "react-hook-form"
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import getImageIlink from "../../../utils/getImageIlink";
import getImageIlink from "../../.././utils/getImageIlink.js"
import axios from "axios";

const ManageMedicines = () => {
  // const axiosPublic = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const image = data.image
    // const res = await getImageIlink(image)
    const res = await getImageIlink(image)
    if (res) {
      data.image = res
      if (!data.discount) {
        data.discount = 0
      }
      const itemMassUnit = data.massNumber + data.massUnit
      data.itemMassUnits = itemMassUnit

      delete data.massNumber
      delete data.massUnit
      const res2 = await axios.post(`${import.meta.env.VITE_SERVER_URL}/category`, data)
      if (res2.data.acknowledged) {
        setShowModal(false)
      }


    }
  }

  return (
    <div>
      <button
        className="btn btn-success mt-10"
        onClick={() => setShowModal(true)}
      >
        Add Medicine
      </button>

      {/* Modal */}
      {
        showModal && (
          <div className="fixed inset-0   overflow-y-auto z-50 bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl mb-4">Add Medicine</h2>
              <form onSubmit={handleSubmit(onSubmit)} >
                <div className="flex gap-4 ">
                  <div className="mb-4">
                    <label className="block text-gray-700">Item Name</label>
                    <input {...register('medicine_name', { required: true })} className="w-full px-3 py-2 border rounded" />
                    {errors.itemName && <span className="text-red-500">Item Name is required</span>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Item Generic Name</label>
                    <input {...register('genericName', { required: true })} className="w-full px-3 py-2 border rounded" />
                    {errors.genericName && <span className="text-red-500">Generic Name is required</span>}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Short Description</label>
                  <textarea {...register('description')} className="w-full px-3 py-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Image Upload</label>
                  <input type="file" {...register('image')} className="w-full px-3 py-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label className="form-control w-full my-6">
                    <div className="label">
                      <span className="label-text">Category</span>
                    </div>
                    <select
                      defaultValue="default"
                      className="select select-bordered w-full"
                      {...register('category', { required: true })}
                    >
                      <option disabled value="default">Select a category</option>
                      <option value="tablet">tablet</option>
                      <option value="syrup">syrup</option>
                      <option value="capsule">capsule</option>
                      <option value="injection">injection</option>
                      <option value="ointment">ointment</option>
                      <option value="inheler">inheler</option>
                    </select>
                    {errors.category && <span className="text-red-500">Category is required</span>}
                  </label>
                </div>
                <div className="mb-4">
                  <label className="form-control w-full my-6">
                    <div className="label">
                      <span className="label-text">Company</span>
                    </div>
                    <select
                      defaultValue="default"
                      className="select select-bordered w-full"
                      {...register('company_name', { required: true })}
                    >
                      <option disabled value="default">Select a Company</option>
                      <option value="ThyroHealth">ThyroHealth</option>
                      <option value="CardioLife">CardioLife</option>
                      <option value="RespiraCare">RespiraCare</option>
                      <option value="AntiBac">AntiBac</option>
                      <option value="ThromboSafe">ThromboSafe</option>
                      <option value="MentalWell">MentalWell</option>
                    </select>
                    {errors.company_name && <span className="text-red-500">Company is required</span>}
                  </label>
                </div>
                <div className="flex gap-5">
                  <div className="mb-4">
                    <label className="block text-gray-700">Item Mass Unit</label>
                    <select {...register('massUnit', { required: true })} className="w-full px-3 py-2 border rounded">
                      <option value="Mg">Mg</option>
                      <option value="ML">ML</option>
                    </select>
                    {errors.massUnit && <span className="text-red-500">Mass Unit is required</span>}
                  </div>
                  <div>
                    <label className="block text-gray-700">Mass Number</label>
                    <input type="number" {...register('massNumber', { required: true, min: 0 })} className="w-full px-3 py-2 border rounded" />
                    {errors.price && <span className="text-red-500">Mass Number required and should be positive</span>}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Per Unit Price</label>
                  <input type="number" {...register('price_per_unit', { required: true, min: 0 })} className="w-full px-3 py-2 border rounded" />
                  {errors.price && <span className="text-red-500">Price is required and should be positive</span>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Discount Percentage</label>
                  <input type="number" {...register('discount', { min: 0, max: 100 })} className="w-full px-3 py-2 border rounded" defaultValue={0} />
                </div>
                <div className="flex justify-end">
                  <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded mr-2">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
                </div>
              </form>
            </div>
          </div>
        )
      }
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMedicines;