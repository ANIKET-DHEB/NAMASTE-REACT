import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";


const CheckoutPage = () => {
    const { cart } = useCart();
    const navigate = useNavigate();
    const [selectedAddress, setSelectedAddress] = useState("home");

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1;
    const deliveryFee = 5;
    const total = subtotal + tax + deliveryFee;

    return (
        <div className="checkout-container">
            <h1 className="cheackoutheader">Checkout</h1>

            <div className="address-section">
                <h3 className="cheackoutheader">Select your address</h3>
                <div className="address-option">
                    <input
                        type="radio"
                        id="home"
                        name="address"
                        checked={selectedAddress === "home"}
                        onChange={() => setSelectedAddress("home")}
                    />
                    <label htmlFor="home">
                        <span className="address-title">Home</span>
                        <p>66,3rd Flr,Bldg No-3,Sabu-siddik Road Near Carnac Bridge</p>
                    </label>
                </div>

                <div className="address-option">
                    <input
                        type="radio"
                        id="work"
                        name="address"
                        checked={selectedAddress === "work"}
                        onChange={() => setSelectedAddress("work")}
                    />
                    <label htmlFor="work">
                        <span className="address-title">Work</span>
                        <p>Parkway Mountain View, California, United States</p>
                    </label>
                </div>
            </div>

          
            <div className="order-summary">
                <h3 className="summaryheader">Order Summary</h3>
                {cart.map((item, index) => (
                    <div key={index} className="order-item">
                        <span>{item.dish} × {item.quantity}</span>
                        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <hr />
                <div className="summary-item">
                    <span>Subtotal</span> <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                    <span>Tax</span> <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                    <span>Delivery</span> <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="summary-item total">
                    <span>Total</span> <span>₹{total.toFixed(2)}</span>
                </div>
            </div>


          
            <button className="pay-now" onClick={() => navigate("/payment")}>Pay Now</button>
        </div>
    );
};

export default CheckoutPage;

