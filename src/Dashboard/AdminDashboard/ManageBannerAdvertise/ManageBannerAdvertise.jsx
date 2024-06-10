import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Pages/Providers/AuthProvider";


const ManageBannerAdvertise = () => {

  const { user } = useContext(AuthContext)
  const { data: applyData = [], refetch } = useQuery({
    queryKey: ['getAllForAd'],
    queryFn: async () => {

      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/getAllForAd`, {
        headers: { Authorization: localStorage.getItem('accessToken') }
      });
      return res.data;

    }
  })
  const handleUpdate = async (id) => {
    const res = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/updateAd/${id}`, {}, {
      headers: { Authorization: localStorage.getItem('accessToken') }
    })
    if (res) {
      refetch()
    }
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Medicine image</th>
              <th>Medicine Name</th>
              <th>Description</th>
              <th>Seller Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              applyData?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td> <img className="size-8" src={item?.bannerImg} alt="" /></td>
                  <td>{item?.medicine_name}</td>
                  <td>{item?.SellerEmail}</td>
                  <td>{item?.status}</td>
                  <td>
                    <button onClick={() => handleUpdate(item._id)} className="btn btn-active btn-accent">accept/remove</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBannerAdvertise;