/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ amount }) => {
    const { user, addMedicine, setAddMedicine } = useContext(AuthContext)
    console.log(addMedicine);
    const navigate = useNavigate();
    const [prcessing, setProcessing] = useState(false)
    const [transectionId, setTransectionId] = useState('')
    const [error, setError] = useState('')
    console.log(amount);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {


        axios.post(`${import.meta.env.VITE_SERVER_URL}/create-payment-intent`, { price: parseFloat(amount) })
            .then(res => setClientSecret(res.data.clientSecret))

    }, [amount])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error)
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'none name',
                        email: user?.email || 'none email'
                    },
                },
            },

        );
        console.log(paymentIntent);
        console.log(confirmError);
        setProcessing(false)
        if (paymentIntent.status == "succeeded") {
            setTransectionId(paymentIntent.id)
            const paymentData = {
                email: user?.email,
                totalPrice: (paymentIntent.amount / 100),
                date: new Date(),
                transectionId: paymentIntent.id,
                medicines: addMedicine.map(item => {
                    return {
                        [item?._id]: item.quanty
                    }
                }),
                paymentStatus: "pending"
            }
            axios.post(`${import.meta.env.VITE_SERVER_URL}/paymentH`, paymentData)
                .then(res => {
                    if (res.data) {
                        setAddMedicine([])
                        console.log(res.data);
                        navigate('/invoice')
                    }
                })
        }
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
            <button className="btn btn-success btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || prcessing}>
                Pay
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {transectionId && <p className="text-green-500" > Transection complite and transection id is :{transectionId}</p>}
        </form>
    );
};

export default CheckoutForm;