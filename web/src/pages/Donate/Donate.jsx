import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Donate() {
    const [amount, setAmount] = useState(1);
    const options = [1, 5, 10, 25];
    return (
        <div className="main main--static donate">
            <div className="donate__card">
                <div className="donate__options">
                    {
                        options.map((option, i) => (
                            <button key={i} className={(amount === option) ? 'donate__option donate__option--active' : 'donate__option'} onClick={() => setAmount(option)}>
                                ${option}
                            </button>
                        ))
                    }
                </div>
                <div className="donate__paypal">
                    <PayPalScriptProvider options={{ "client-id": "test" }}>
                        <PayPalButtons style={{ layout: "horizontal" }} />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    );
}

export default Donate;