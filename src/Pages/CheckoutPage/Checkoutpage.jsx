import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("");
const Checkoutpage = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      <h2 className="text-3xl">This is checkout page</h2>
    </div>
  );
};

export default Checkoutpage;

// import.meta.env.VITE_Payment_Gateway_PK
