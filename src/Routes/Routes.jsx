import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
// import CategoriesSection from "../Pages/Home/CategoriesSection/CategoriesSection";
import Shop from "../Pages/Shop/Shop";
import CategoryData from "../Pages/Home/CategoryData/CategoryData";
import CartPage from "../Pages/CartPage/CartPage";
import Checkoutpage from "../Pages/CheckoutPage/Checkoutpage";
import UserUpdateProfile from "../Dashboard/UserDashboard/UserUpdateProfile/UserUpdateProfile";
import UserDAshboard from "../Dashboard/UserDashboard/UserDashboard/UserDAshboard";
import ManageUsers from "../Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import ManageCategory from "../Dashboard/AdminDashboard/ManageCategory/ManageCategory";
import PaymentManagement from "../Dashboard/AdminDashboard/PaymentManagemant/PaymentManagement";
import SalesReport from "../Dashboard/AdminDashboard/SalesReport/SalesReport";
import ManageBannerAdvertise from "../Dashboard/AdminDashboard/ManageBannerAdvertise/ManageBannerAdvertise";
import ManageMedicines from "../Dashboard/SellerDashboard/ManageMedicines/ManageMedicines";
import PaymentHistory from "../Dashboard/SellerDashboard/PaymentHistory/PaymentHistory";
import AskForAdvertisement from "../Dashboard/SellerDashboard/AskForAdvertisement/AskForAdvertisement";
import UserHome from "../Dashboard/UserDashboard/UserHome/UserHome";
import AdminHome from "../Dashboard/AdminDashboard/AdminHome/AdminHome";
import SellerHome from "../Dashboard/SellerDashboard/SellerHome/SellerHome";
// import Shop from "../Pages/Shop/Shop";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/login",
            element:<Login></Login>
        },{
            path: "/signup",
            element:<Signup></Signup>

        },
        {
            path:'/shop',
            element:<Shop></Shop>
        },
        {
            path:`/categoryData/:category`,
            element:<CategoryData></CategoryData>
        },
        {
          path:'/cart',
          element:<CartPage></CartPage>
        },
        {
          path:'/checkout',
          element:<Checkoutpage></Checkoutpage>,
        },
        {
          path:'/userUpdateProfile',
          element:<UserUpdateProfile></UserUpdateProfile>
        },

       
        // {
        //     path:'/shop/:category',
        //     element:<Shop></Shop>,
        //     loader:({params}) =>fetch(`medicine.json/${params.category}`)
        //   },

      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        //user route
        // {
        //   path:'userHome',
        //   element:<UserHome></UserHome>
        // },
        {
          path:'paymentHistory',
          element:<UserDAshboard></UserDAshboard>
        },

        //admin route
        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'manageUsers',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'manageCategory',
          element:<ManageCategory></ManageCategory>
        },
        {
          path:'paymentManagement',
          element:<PaymentManagement></PaymentManagement>
        },
        {
          path:'salesReport',
         element:<SalesReport></SalesReport>
        },
        {
          path:'manageBannerAdvertise',
          element:<ManageBannerAdvertise></ManageBannerAdvertise>
        },
        // seller route
        {
          path:'sellerHome',
          element:<SellerHome></SellerHome>
        },
        {
          path:'manageMedicines',
          element:<ManageMedicines></ManageMedicines>
        },
        {
          path:'sellerPaymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'askForAdvertisement',
          element:<AskForAdvertisement></AskForAdvertisement>
          
        },


      ]
    }
  ]);