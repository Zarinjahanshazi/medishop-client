import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AdminHome = () => {
    const { data: revenue = {}, } = useQuery({
        queryKey: ['getAd'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/revenueAdmin`, {
                headers: { Authorization: localStorage.getItem('accessToken') }
            });
            return res.data;

        }
    })
    return (
        <div className="stats shadow mt-8">

            <div className="stat place-items-center">
                <div className="stat-title">Total Price payment</div>
                <div className="stat-value">${revenue?.totalPrice}</div>
                <div className="stat-desc">From January 1st to February 1st</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Paid</div>
                <div className="stat-value">{revenue?.paid}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title">pending</div>
                <div className="stat-value">{revenue?.pending}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Users</div>
                <div className="stat-value text-secondary">{revenue?.totalUser}</div>
            </div>
        </div>
    );
};

export default AdminHome;