
import { FaHouseMedical } from "react-icons/fa6";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const InvoicePage = () => {

    const printPDF = () => {
        const input = document.getElementById('invoice-content');
        html2canvas(input, { useCORS: true })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save("invoice.pdf");
            })
            .catch((error) => {
                console.error("Error generating PDF", error);
            });
    };

    return (
        <div>
            <div className="flex justify-between m-10">
                <div>
                    <h2 className="text-3xl mb-5 text-white bg-[#05b37e] rounded-lg">
                        <FaHouseMedical />
                    </h2>
                    <h3>User Name:</h3>
                    <h3>Date:</h3>
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
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>1</td>
                            <td>$10</td>
                            <td>$10</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
                <div className="m-10">
                    <button className="btn btn-secondary">Grand Total</button>
                </div>
            </div>
            <button className="btn mx-10 btn-success" onClick={printPDF}>Print PDF</button>
        </div>
    );
};

export default InvoicePage;