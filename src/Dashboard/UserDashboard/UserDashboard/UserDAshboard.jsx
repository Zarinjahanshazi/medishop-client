import { useContext } from "react";
import { AuthContext } from "../../../Pages/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const UserDAshboard = () => {
  const { user } = useContext(AuthContext)

  const { data: paymentHistoryData = [], } = useQuery({
    queryKey: ['mePaymentH',],
    queryFn: async () => {
      if (user) {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/mePaymentH?email=${user?.email}`, {
          headers: { Authorization: localStorage.getItem('accessToken') }
        });
        return res.data;
      }
    },
    enabled: !!user?.email

  })
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction Id</th>
              <th>Item</th>
              <th>Total Price</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              paymentHistoryData?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item?.transectionId}</td>
                  <td>
                    {
                      item?.medicines?.map((item, index) => (
                        <span key={index}>{!index == 0 && ','}{item?.medicine_name}</span>

                      ))
                    }
                  </td>
                  <td>{item?.totalPrice
                  }</td>
                  <td>{item?.paymentStatus}</td>

                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDAshboard;