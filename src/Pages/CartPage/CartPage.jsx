import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const CartPage = () => {
  const { addMedicine, setAddMedicine } = useContext(AuthContext)
  const handleDelete = (id) => {
    const find = addMedicine.filter(i => i._id != id)
    setAddMedicine([...find])
  };

  const handladeQuantityChange = ({ quanty, id }) => {

    setAddMedicine(addMedicine.map(medicine =>
      medicine._id === id ? { ...medicine, quanty } : medicine
    ));
  }

  return (
    <div>
      <Helmet>
        <title>Medi-Shop|Cart</title>
      </Helmet>
      <div className="flex justify-around mt-8">
        <div>
          <button onClick={() => setAddMedicine([])} className="btn btn-primary">Clear All</button>
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
              <th>Quantity update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              addMedicine?.map((item, index) => (<tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item?.medicine_name}</td>
                <td>{item?.company_name}</td>
                <td>{item?.price_per_unit}</td>
                <td>{item?.quanty}</td>
                <td>
                  <label className="form-control  my-6">
                    <input
                      onChange={(e) => handladeQuantityChange({ quanty: e.target.value, id: item._id })}
                      defaultValue={item?.quanty}
                      type="number"
                      placeholder="quantity"
                      className="input input-bordered  "
                    />
                  </label>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;