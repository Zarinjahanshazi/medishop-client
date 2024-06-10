import { useContext, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';
import { FaHouseMedical } from "react-icons/fa6";
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const InvoicePage = () => {
    const { user } = useContext(AuthContext)
    const printRef = useRef();
    console.log(user);
    const handleDownloadPdf = async () => {
        const element = printRef.current;

        try {
            const canvas = await html2canvas(element, { useCORS: true });
            const data = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('invoice.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };
    const { refetch, data: invoiceData = {}, isLoading } = useQuery({
        queryKey: ['paymentH', user?.email],
        queryFn: async () => {
            if (user) {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/paymentH?email=${user?.email}`);
                return res.data;
            }

        },
        enabled: !!user?.email,
    })
    console.log(invoiceData?.medicines);

    return (
        <div>
            <Helmet>
        <title>Medi-Shop|Invoice</title>
      </Helmet>
            <div ref={printRef}>
                <div style={{ padding: '10px', background: '#f5f5f5' }} className="flex justify-between m-10">
                    <div>
                        <h2 className="text-3xl mb-5 text-white bg-[#05b37e] rounded-lg">
                            <FaHouseMedical />
                        </h2>
                        <h3>User Name:{invoiceData.email}</h3>
                        <h3>Date:{new Date(invoiceData.date).toLocaleDateString()}</h3>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">
                            Invoice
                        </h2>
                    </div>
                </div>

                <div id="invoice-content" className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>safi</td>
                            </tr> */}
                            {invoiceData?.medicines?.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.medicine_name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price_per_unit}</td>
                                    <td>{item.tPrice}</td>
                                </tr>
                            ))}
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                    <div className="m-10">
                        <button className="btn btn-secondary">Grand Total: ${parseFloat(invoiceData.totalPrice)}</button>
                    </div>
                </div>
            </div>
            <button className="btn mx-10 btn-success" onClick={handleDownloadPdf}>Print PDF</button>
        </div>
    );
};

export default InvoicePage;