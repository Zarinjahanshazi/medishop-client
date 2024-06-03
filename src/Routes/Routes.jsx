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

        // {
        //     path:'/shop/:category',
        //     element:<Shop></Shop>,
        //     loader:({params}) =>fetch(`medicine.json/${params.category}`)
        //   },

      ]
    },
  ]);