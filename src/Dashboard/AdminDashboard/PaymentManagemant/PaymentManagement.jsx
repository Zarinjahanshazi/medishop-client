import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const PaymentManagement = () => {
  const { refetch, data: paymentHistoryData = [], } = useQuery({
    queryKey: ['mePaymentH',],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/allpayment`, {
        headers: { Authorization: localStorage.getItem('accessToken') }
      });
      return res.data;

    },

  })
  const formatDate = (date) => {
    if (!date) return "";
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  };
  console.log('hello');
  console.log(paymentHistoryData)
  const handleAcepetPayment = async (id) => {
    console.log(id);
    const res = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/changeStatusPayment/${id}`, {}, {
      headers: { Authorization: localStorage.getItem('accessToken') }
    })
    if (res.data) {
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
              <th>#</th>
              <th>Date</th>
              <th>Transection Id</th>
              <th>Payment Status</th>
              <th>Action</th>
              {/* <th>Favorite Color</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              paymentHistoryData?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{formatDate(item?.date)}</td>
                  <td>{item?.transectionId}</td>
                  <td>{item?.paymentStatus}</td>
                  <td>
                    <button onClick={() => (handleAcepetPayment(item._id))} className="btn btn-success">Accept Payment</button>
                  </td>
                  {/* <td>Blue</td> */}
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentManagement;