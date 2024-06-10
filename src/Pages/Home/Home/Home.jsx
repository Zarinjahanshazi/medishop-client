
// import About from "../../about/About";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import DiscountSection from "../DiscountSection/DiscountSection";
// import CategoriesSection from "../CategoriesSection/CategoriesSection";
// import CategoryData from "../CategoryData/CategoryData";
// import UsersQueries from "../UsersQueries/UsersQueries";
import MainCategoryData from "./MainCategoryData/MainCategoryData";
import Faq from "../Faq/Faq";
import DownBanner from "../DownBanner/DownBanner";


const Home = () => {

    return (
        <div>
            <Helmet>
        <title>Medi-Shop|Home</title>
      </Helmet>
            <Banner></Banner>
            {/* <CategoriesSection></CategoriesSection> */}
            {/* <UsersQueries></UsersQueries> */}
            <MainCategoryData></MainCategoryData>
            <DiscountSection></DiscountSection>
            <Faq></Faq>
            <DownBanner></DownBanner>
            {/* <About /> */}
            {/* <CategoryData></CategoryData> */}
        </div>
    );
};

export default Home;