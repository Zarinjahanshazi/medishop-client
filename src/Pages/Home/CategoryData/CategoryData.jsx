import { useParams } from "react-router-dom";
import useCategory from "../../../hooks/useCategory";
import { GrCheckboxSelected } from "react-icons/gr";
import { FaEye } from "react-icons/fa6";
import { useState } from "react";

const CategoryData = () => {
  const { category } = useParams();
  // const stUpparcase = category.split('').slice(0,1).join('').toUpperCase()+ category.split('').slice(1,-1).join('')
  const [categories] = useCategory(category);
  console.log("dynamic categories", categories);

  const [currentItem, setCurrentItem] = useState(null);

  const handleOpenModal = (item) => {
    setCurrentItem(item);
    document.getElementById('my_modal_1').showModal();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Select</th>
              <th>Eye</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.medicine_name}</td>
                <td>
                    
                  <button className="btn bg-orange-500 btn-lg">
                    <h2 className="text-white text-2xl">
                      <GrCheckboxSelected />
                    </h2>
                  </button>
                </td>
                <td>
                  {/* <button className="btn bg-orange-500 btn-ghost btn-lg">
                   
                    <h2 className="text-white text-2xl">
                      <FaEye />
                    </h2>
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

export default CategoryData;
