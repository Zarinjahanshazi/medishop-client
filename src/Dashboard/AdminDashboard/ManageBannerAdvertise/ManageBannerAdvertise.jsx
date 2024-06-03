

const ManageBannerAdvertise = () => {
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
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>
        <button className="btn btn-active btn-accent">accept/remove</button>
        </td>
      </tr>
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageBannerAdvertise;