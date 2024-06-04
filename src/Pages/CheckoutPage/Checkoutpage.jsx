import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Checkoutpage = () => {
  return (
    <div  className="max-w-6xl mx-auto">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      <h2 className="text-3xl">This is checkout page</h2>
    </div>
  );
};

export default Checkoutpage;

// import.meta.env.VITE_Payment_Gateway_PK
