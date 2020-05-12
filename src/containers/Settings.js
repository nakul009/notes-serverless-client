import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";
import config from "../config";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import "./Settings.css";

export default function Settings() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [stripe, setStripe] = useState(null);

    function billUser(details) {
        return API.post("Notes", "/billing", {
            body: details
        });
    }

    useEffect(() => {
        setStripe(window.Stripe(config.STRIPE_KEY));
    }, []);

    async function handleFormSubmit(storage, { token, error }) {
        if (error) {
            console.log(error);
            return;
        }

        setIsLoading(true);

        try {
            await billUser({
                storage,
                source: token.id
            });

            alert("Your card has been charged successfully!");
            history.push("/");
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }

    return (
        <div className="Settings">
            <StripeProvider stripe={stripe}>
                <Elements>
                    <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
                </Elements>
            </StripeProvider>
        </div>
    );
}