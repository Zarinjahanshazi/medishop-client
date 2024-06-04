
import Banner from "../Banner/Banner";
import DiscountSection from "../DiscountSection/DiscountSection";
import { Helmet } from "react-helmet";
// import CategoriesSection from "../CategoriesSection/CategoriesSection";
// import CategoryData from "../CategoryData/CategoryData";
// import UsersQueries from "../UsersQueries/UsersQueries";
import MainCategoryData from "./MainCategoryData/MainCategoryData";


const Home = () => {
    
    return (
        <div>
            <Helmet>
        <title>MediShop|Home</title>
      </Helmet>
            <Banner></Banner>
            {/* <CategoriesSection></CategoriesSection> */}
            {/* <UsersQueries></UsersQueries> */}
            <MainCategoryData></MainCategoryData>
            <DiscountSection></DiscountSection>
            {/* <CategoryData></CategoryData> */}
        </div>
    );
};

export default Home;