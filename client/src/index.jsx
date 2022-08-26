import React from 'react';
import ReactDOM from 'react-dom/client';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import App from './App';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_ID }}>
            <App />
        </PayPalScriptProvider>
    </React.StrictMode>
);