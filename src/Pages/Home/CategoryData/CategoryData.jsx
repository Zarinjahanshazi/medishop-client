import { useParams } from "react-router-dom";
import useCategory from "../../../hooks/useCategory";
import { GrCheckboxSelected } from "react-icons/gr";
import { FaEye } from "react-icons/fa6";

const CategoryData = () => {
  const { category } = useParams();
  // const stUpparcase = category.split('').slice(0,1).join('').toUpperCase()+ category.split('').slice(1,-1).join('')
  const [categories] = useCategory(category);
  console.log("dynamic categories", categories);

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
                  <button className="btn bg-orange-500 btn-ghost btn-lg">
                   
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
    </div>
  );
};

export default CategoryData;
