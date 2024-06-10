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
import InvoicePage from "../Pages/InvoicePage/InvoicePage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
// import Shop from "../Pages/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }, {
        path: "/signup",
        element: <Signup></Signup>

      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: `/categoryData/:category`,
        element: <CategoryData></CategoryData>
      },
      {
        path: '/cart',
        element: <CartPage></CartPage>
      },
      {
        path: '/checkout',
        element: <Checkoutpage></Checkoutpage>,
      },
      {
        path: '/userUpdateProfile',
        element: <UserUpdateProfile></UserUpdateProfile>
      },
      {
        path: '/invoice',
        element: <InvoicePage></InvoicePage>
      },


    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //user route
      {
        path: 'paymentHistory',
        element: <PrivateRoute><UserDAshboard></UserDAshboard></PrivateRoute>
      },

      //admin route
      {
        path: 'manageUsers',
        element: <PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
      },
      {
        path: 'manageCategory',
        element: <PrivateRoute><ManageCategory></ManageCategory></PrivateRoute>
      },
      {
        path: 'paymentManagement',
        element: <PrivateRoute><PaymentManagement></PaymentManagement></PrivateRoute>
      },
      {
        path: 'salesReport',
        element: <PrivateRoute><SalesReport></SalesReport></PrivateRoute>
      },
      {
        path: 'manageBannerAdvertise',
        element: <PrivateRoute><ManageBannerAdvertise></ManageBannerAdvertise></PrivateRoute>
      },
      // seller route
      {
        path: 'manageMedicines',
        element: <PrivateRoute><ManageMedicines></ManageMedicines></PrivateRoute>
      },
      {
        path: 'sellerPaymentHistory',
        element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      },
      {
        path: 'askForAdvertisement',
        element: <PrivateRoute><AskForAdvertisement></AskForAdvertisement></PrivateRoute>

      },


    ]
  }
]);