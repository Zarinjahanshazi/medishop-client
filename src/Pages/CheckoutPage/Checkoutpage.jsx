import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Checkoutpage = () => {
    const { addMedicine } = useContext(AuthContext)
    const totalProce = addMedicine.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.totalPrice), 0)
    console.log(totalProce);
    return (
        <div className="max-w-6xl mx-auto">
            <button className="btn items-center justify-center m-10 btn-success">Total Price:{totalProce}</button>
            <Elements stripe={stripePromise}>
                <CheckoutForm amount={totalProce} />
            </Elements>
            {/* <h2 className="text-3xl">This is checkout page</h2> */}


        </div>
    );
};

export default Checkoutpage;

