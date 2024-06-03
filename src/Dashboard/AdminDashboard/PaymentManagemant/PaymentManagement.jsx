

const PaymentManagement = () => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Payment Status</th>
        <th>Action</th>
        {/* <th>Favorite Color</th> */}
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>
        <button className="btn btn-success">Accept Payment</button>
            </td>
        {/* <td>Blue</td> */}
      </tr>
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentManagement;