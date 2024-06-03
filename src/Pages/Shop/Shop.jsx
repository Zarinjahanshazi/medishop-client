import useShop from "../../hooks/useShop";
import { GrCheckboxSelected } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

const Shop = () => {
  const [shop] = useShop();
  console.log(shop);

  const [currentItem, setCurrentItem] = useState(null);

  const handleOpenModal = (item) => {
    setCurrentItem(item);
    document.getElementById("my_modal_1").showModal();
  };

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
            {shop.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.medicine_name}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    // onClick={() => handleMakeAdmin(user)}
                    className="btn bg-orange-500 btn-lg"
                  >
                    {/* <FaSele className="text-white text-2xl"></FaSele> */}
                    <h2 className="text-white text-2xl">
                      <GrCheckboxSelected />
                    </h2>
                  </button>
                </td>
                <td>
                  {/* <button
                  className="btn bg-orange-500 btn-ghost btn-lg">
                    <h2 className="text-white text-2xl"><FaEye /></h2>
                  </button> */}
                  <button
                    className="btn bg-orange-500 btn-ghost btn-lg"
                    onClick={() => handleOpenModal(item)}
                  >
                    <h2 className="text-white text-2xl">
                      <FaEye />
                    </h2>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    {currentItem && (
                        <>
                            <h3 className="font-bold text-lg">{currentItem.medicine_name}</h3>
                            <p className="py-4">Category: {currentItem.category}</p>
                            <p className="py-4">Company: {currentItem.company_name}</p>
                            <p className="py-4">Price: ${currentItem.price_per_unit}</p>
                            <p className="py-4">Description: {currentItem.description}</p>
                            <p className="py-4">Discount: {currentItem.discount}%</p>
                        </>
                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
    </div>
  );
};

export default Shop;
