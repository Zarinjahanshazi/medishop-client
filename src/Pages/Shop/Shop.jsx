import { FaEye } from "react-icons/fa6";
import { GrCheckboxSelected } from "react-icons/gr";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
// import useAuth from "../../hooks/useAuth";
// import { useLocation, useNavigate } from "react-router-dom";
// import useCart from "../../hooks/useCart";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  // const axiosSecure = useAxiosSecure();
  // const { user } = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [, refetch] = useCart();
  const { data: getData = [] } = useQuery({
    queryKey: ["getData"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/categories");
      return data;
    },
  });
  console.log(getData);
  const { setAddMedicine, addMedicine } = useContext(AuthContext)


  const [currentItem, setCurrentItem] = useState(null);
  const handleOpenModal = (item) => {
    setCurrentItem(item);
    document.getElementById("my_modal_1").showModal();
  };
  const handleAddMedicine = (item) => {
    const isExist = addMedicine.find(i => i._id === item._id);
    if (!isExist) {
      item.quanty = 1;
      item.totalPrice = parseFloat(item.price_per_unit * item.quanty).toFixed(2)
      setAddMedicine([...addMedicine, item]);
    } else {
      isExist.quanty += 1;
      item.TotalPrice = parseFloat(item.price_per_unit * isExist.quanty).toFixed(2)
      setAddMedicine([...addMedicine]);
    }

  }

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">Shop</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>category</th>
              <th>Action 1</th>
              <th>Action 2</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.medicine_name}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={() => handleAddMedicine(item)} className="btn bg-orange-500 btn-lg">
                    <h2 className="text-white text-2xl">

                      <GrCheckboxSelected />
                    </h2>
                  </button>
                </td>
                <td>
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

export default Shop;



{
  // const handleAddToCart = () =>{
  //   if(user && user.email){
  //     //send cart item to the database
  //     // console.log(user.email,food);
  //     const cartItem = {
  //       // menuId:_id,
  //       // email:user.email,
  //       // name,
  //       // image,
  //       // price


  //     }

  //     axiosSecure.post('/carts',cartItem)
  //     .then(res =>{
  //       console.log(res.data);
  //       if(res.data.insertedId){
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: ${name} added to your cart,
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //         // refetch the cart to update the cart items count
  //         refetch();

  //       }
  //     })

  //   }
  //   else{
  //     Swal.fire({
  //       title: "You are not Logged In",
  //       text: "Please login to add to the cart",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, login"
  //     }).then((result) => {
  //       if (result.isConfirmed) {

  //           // send the user to the login page
  //           navigate('/login', {state:{from:location}})

  //       }
  //     });

  //   }
  // }
}