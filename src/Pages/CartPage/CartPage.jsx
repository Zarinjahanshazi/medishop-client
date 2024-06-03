import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div>
         <div className="flex justify-around mt-8">
            <div>
            <button className="btn btn-primary">Clear All</button>
            </div>
            <div>
            {/* <Link to='/dashboard/payment'><button className="btn btn-primary">Pay</button></Link>
         <button disabled className="btn btn-primary">Pay</button> */}
            <Link to='/checkout'><button className="btn btn-primary">checkout </button></Link>
            </div>
        
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Medicine Name</th>
              <th>Company Name</th>
              <th>Price per unit</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <label className="form-control  my-6">
                  <input
                    type="number"
                    placeholder="quantity"
                    className="input input-bordered  "
                  />
                </label>
              </td>
              <td>
                <button
                 onClick={handleDelete}
                  className="btn btn-ghost btn-lg"
                >
                  <FaTrashAlt className="text-red-600"></FaTrashAlt>
                </button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
