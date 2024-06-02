import useShop from "../../hooks/useShop";
import { GrCheckboxSelected } from "react-icons/gr";
import { FaEye } from "react-icons/fa";

const Shop = () => {
    const [shop] = useShop();
    console.log(shop);
    
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">Shop</h2>
                
            </div>

            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>category</th>
        <th>Action 1</th>
        <th>Action 2</th>
      </tr>
    </thead>
    <tbody>
        {
            shop.map((item,index) => <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.medicine_name}</td>
                <td>{item.category}</td>
                <td>

                 <button
                    // onClick={() => handleMakeAdmin(user)}
                    className="btn bg-orange-500 btn-lg">
                      {/* <FaSele className="text-white text-2xl"></FaSele> */}
                      <h2 className="text-white text-2xl"><GrCheckboxSelected /></h2>
                    </button>
                
                </td>
                <td>
                <button
                //   onClick={() => handleDeleteUser(user)}
                  className="btn bg-orange-500 btn-ghost btn-lg">
                    {/* <FaTrashAlt className="text-red-600"></FaTrashAlt> */}
                    <h2 className="text-white text-2xl"><FaEye /></h2>
                  </button>
                </td>
              </tr>)
        }
    
      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Shop;