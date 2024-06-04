import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const CheckoutForm = () => {
    const { addMedicine } = useContext(AuthContext)
    const totalProce = addMedicine.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.totalPrice), 0)
    console.log(totalProce);


    const stripe = useStripe();
  const elements = useElements();
    const handleSubmit = async(event) =>{
        event.preventDefault();



    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      
      <button  className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe}>
        Pay{totalProce}
      </button>
        </form>
    );
};

export default CheckoutForm;