import { Link } from "react-router-dom";
import useMainCategoryData from "../../../../hooks/useMainCategoryData";

const MainCategoryData = () => {
  const [mcategory] = useMainCategoryData();
  console.log("maincategory", mcategory);
  return (
    <div className="grid grid-cols-3">
      {
        mcategory?.map(item => (<Link key={item.id} to={`/categoryData/${item.name}`}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={item.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <span className="text-3xl">{item.categoriesCount}</span>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </Link>))
      }
    </div>
  );
};

export default MainCategoryData;