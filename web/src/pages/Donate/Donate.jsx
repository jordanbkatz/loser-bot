import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Donate() {
    const [amount, setAmount] = useState(1);
    const options = [1, 5, 10, 25];
    const handleDonate = function (data, actions) {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount
                    }
                }
            ]
        });
    };
    const handleApprove = async function (data, actions) {
        const order = await actions.order.capture();
        console.log(order);
    }
    return (
        <div className="main main--static donate">
            <div className="card">
                <div className="options">
                    {
                        options.map((option, i) => (
                            <button 
                                key={i} 
                                className={(amount === option) ? 'option option--active' : 'option'}
                                onClick={() => setAmount(option)}
                            >${option}</button>
                        ))
                    }
                </div>
                <div className="paypal">
                    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_ID }}>
                        <PayPalButtons
                            forceReRender={[amount]}
                            createOrder={handleDonate} 
                            onApprove={handleApprove} 
                        />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    );
}

export default Donate;