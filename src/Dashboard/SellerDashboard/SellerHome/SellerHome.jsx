import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Pages/Providers/AuthProvider";


const SellerHome = () => {
    const { user } = useContext(AuthContext)
    const { data: revenue = {}, } = useQuery({
        queryKey: ['getAd'],
        queryFn: async () => {
            if (user) {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/sellerRevenue?email=${user?.email}`, {
                    headers: { Authorization: localStorage.getItem('accessToken') }
                });
                return res.data;
            }

        }
    })

    return (
        <div className="stats shadow mt-8 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            <div className="stat place-items-center">
                <div className="stat-title">Pending Tk</div>
                <div className="stat-value">{revenue?.totalPrice}</div>
                <div className="stat-desc">From January 1st to February 1st</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title">Pending Tk</div>
                <div className="stat-value">{revenue?.totalPending}</div>
                <div className="stat-desc">From January 1st to February 1st</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title">Paid Tk</div>
                <div className="stat-value">{revenue?.pending}</div>
                <div className="stat-desc">From January 1st to February 1st</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title">pending</div>
                <div className="stat-value">{revenue?.pending}</div>
                <div className="stat-desc">From January 1st to February 1st</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Paid</div>
                <div className="stat-value">{revenue?.paid}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>
    );
};

export default SellerHome;