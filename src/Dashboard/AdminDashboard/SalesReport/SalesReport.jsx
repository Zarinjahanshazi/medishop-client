import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";


const SalesReport = () => {
    const tableRef = useRef(null);
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const { refetch, data: sellesReport = [], isLoading } = useQuery({
        queryKey: ['sellsReport', startDate, endDate],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/sellsReport?startDate=${startDate}&endDate=${endDate}`, {
                headers: { Authorization: localStorage.getItem('accessToken') }
            });
            return res.data;
        },
    })
    console.log(sellesReport);
    return (
        <div>
            <h2 className="text-3xl">This is admin Sales Report</h2>
            <div className="flex gap-28">
                <div className="flex flex-col">
                    <label>Start Date</label>
                    <input type="date" onBlur={(e) => setStartDate(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label>End Date</label>
                    <input type="date" onBlur={(e) => setEndDate(e.target.value)} />
                </div>

            </div>
            <div>
                <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                    <button className="btn "> Dowonload excel </button>

                </DownloadTableExcel>
            </div>
            <div className="overflow-x-auto">
                <table ref={tableRef} className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Medicine Name</th>
                            <th>Seller email</th>
                            <th>Buyer email</th>
                            <th>Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            sellesReport?.map((item, index) => (
                                <tr key={index} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{
                                        item?.medicines.map((item, index) => (
                                            <span key={index}>
                                                <span>{item?.medicine_name}: {item?.quantity},</span>
                                            </span>
                                        ))
                                    }</td>
                                    <td>
                                        {
                                            item?.medicines.map((item, index) => (
                                                <span key={index} className="flex flex-col">
                                                    <span>{item?.sellerEmail[0] || 'moni@gmail.com'}</span>
                                                </span>
                                            ))
                                        }
                                    </td>
                                    <td>{item?.email}</td>
                                    <td>{item?.totalPrice}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesReport;