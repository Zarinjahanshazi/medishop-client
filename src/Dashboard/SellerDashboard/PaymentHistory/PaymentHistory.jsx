import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Pages/Providers/AuthProvider";



const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const { data: sellerPaymentHistoryData = [], } = useQuery({
        queryKey: ['sellerPaymentHistory'],
        queryFn: async () => {
            if (user) {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/sellerPaymentHistory?email=${user?.email}`);
                return res.data;
            }

        },
    })


    return (
        <div>
            <h2 className="text-3xl">This is Seller Payment History</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Medicine Name</th>
                            <th>category</th>
                            <th>Price</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            sellerPaymentHistoryData?.map((item, index) => (
                                <tr key={index} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{item?.medicine_name}</td>
                                    <td>{item?.category}</td>
                                    <td>{item?.price_per_unit}</td>
                                    <td>{item?.discount}</td>
                                    <td>
                                        {
                                            item?.paymentData?.map((item, index) => (
                                                <div key={index}>
                                                    <span>{item?.paymentStatus}</span>
                                                </div>
                                            ))
                                        }
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

export default PaymentHistory;