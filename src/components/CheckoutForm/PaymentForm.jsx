import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Review from "./Review";
import useStyles from "./styles"

//This component represents the payment form that the user has to fill in (credit card).

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, shippingData, backStep, onCaptureCheckout, nextStep, timeout }) => {
    const classes = useStyles();

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();

        if(!stripe || !elements) return;
        
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: cardElement });

        if (error)
            console.log('[error]', error);
        else {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: {
                    firstname: shippingData.firstName,
                    lastname: shippingData.lastname,
                    email:shippingData.email
                },
                shipping: {
                    name: "Primary",
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry
                },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: "stripe",
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            }
            onCaptureCheckout(checkoutToken.id, orderData);
            timeout();
            nextStep();
        }
    }

    return (
        <>
            <Review checkoutToken={checkoutToken} shippingCountry={shippingData.shippingCountry} />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>Payment method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /><br />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button variant="outlined" onClick={backStep}>Back</Button>
                                <Button className={classes.button} type="submit" variant="contained" disabled={!stripe} color="primary">
                                    Pay $
                                    {(shippingData.shippingCountry !== "US" && shippingData.shippingCountry !== "CA")
                                        ? ( parseFloat(checkoutToken.live.subtotal.formatted) + 10 )
                                        : ( checkoutToken.live.subtotal.formatted )
                                    }
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
};

export default PaymentForm;