
import Banner from "../Banner/Banner";
// import CategoriesSection from "../CategoriesSection/CategoriesSection";
// import CategoryData from "../CategoryData/CategoryData";
import UsersQueries from "../UsersQueries/UsersQueries";
import MainCategoryData from "./MainCategoryData/MainCategoryData";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            {/* <CategoriesSection></CategoriesSection> */}
            <UsersQueries></UsersQueries>
            <MainCategoryData></MainCategoryData>
            {/* <CategoryData></CategoryData> */}
        </div>
    );
};

export default Home;