// import { useLoaderData } from "react-router-dom";
import useCategory from "../../../hooks/useCategory";


const CategoriesSection = () => {
    const [category] = useCategory();
    console.log('category',category);

    return (
        <div>
            <h2 className="text-4xl">category</h2>
        </div>
    );
};

export default CategoriesSection;