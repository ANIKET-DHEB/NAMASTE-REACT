import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

const CheckoutPage = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    const [selectedAddress, setSelectedAddress] = useState("home");

    // =================================
    // CALCULATE TOTAL
    // =================================

    const subtotal = cart.reduce(
        (sum, item) =>
            sum + Number(item.price) * Number(item.quantity),
        0
    );

    const tax = subtotal * 0.1;
    const deliveryFee = subtotal > 0 ? 5 : 0;
    const total = subtotal + tax + deliveryFee;

    // =================================
    // PROCEED TO PAYMENT
    // =================================

    const handleProceedToPayment = () => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            navigate("/");
            return;
        }

        const addressData =
            selectedAddress === "home"
                ? {
                      address: "Home",
                      customerAddress:
                          "66, 3rd Flr, Bldg No-3, Sabu-Siddik Road, Near Carnac Bridge",
                  }
                : {
                      address: "Work",
                      customerAddress:
                          "Parkway Mountain View, California, United States",
                  };

        navigate("/payment", {
            state: {
                address: addressData.address,
                customerAddress:
                    addressData.customerAddress,
            },
        });
    };

    return (
        <div className="checkout-page">

            {/* =================================
                PAGE HEADER
            ================================= */}

            <div className="checkout-top">

                <div>

                    <p className="checkout-small-title">
                        SWIFTEATS
                    </p>

                    <h1>
                        Checkout
                    </h1>

                    <p className="checkout-subtitle">
                        Complete your order in just a few steps
                    </p>

                </div>

                <div className="secure-badge">
                    🔒 Secure Checkout
                </div>

            </div>


            {/* =================================
                MAIN CHECKOUT
            ================================= */}

            <div className="checkout-layout">


                {/* =================================
                    LEFT SIDE
                ================================= */}

                <div className="checkout-left">


                    {/* =================================
                        DELIVERY ADDRESS
                    ================================= */}

                    <section className="checkout-card">

                        <div className="card-heading">

                            <div className="heading-icon">
                                📍
                            </div>

                            <div>

                                <h2>
                                    Delivery Address
                                </h2>

                                <p>
                                    Where should we deliver your order?
                                </p>

                            </div>

                        </div>


                        {/* =================================
                            HOME
                        ================================= */}

                        <div
                            className={`address-card ${
                                selectedAddress === "home"
                                    ? "address-selected"
                                    : ""
                            }`}
                            onClick={() =>
                                setSelectedAddress("home")
                            }
                        >

                            <div className="address-radio">

                                <input
                                    type="radio"
                                    id="home"
                                    name="address"
                                    checked={
                                        selectedAddress === "home"
                                    }
                                    onChange={() =>
                                        setSelectedAddress("home")
                                    }
                                />

                            </div>


                            <div className="address-content">

                                <div className="address-name-row">

                                    <span className="address-name">
                                        Home
                                    </span>

                                    <span className="address-tag">
                                        DEFAULT
                                    </span>

                                </div>

                                <p>
                                    66, 3rd Flr, Bldg No-3,
                                    Sabu-Siddik Road,
                                    Near Carnac Bridge
                                </p>

                            </div>


                            {selectedAddress === "home" && (
                                <div className="selected-check">
                                    ✓
                                </div>
                            )}

                        </div>


                        {/* =================================
                            WORK
                        ================================= */}

                        <div
                            className={`address-card ${
                                selectedAddress === "work"
                                    ? "address-selected"
                                    : ""
                            }`}
                            onClick={() =>
                                setSelectedAddress("work")
                            }
                        >

                            <div className="address-radio">

                                <input
                                    type="radio"
                                    id="work"
                                    name="address"
                                    checked={
                                        selectedAddress === "work"
                                    }
                                    onChange={() =>
                                        setSelectedAddress("work")
                                    }
                                />

                            </div>


                            <div className="address-content">

                                <div className="address-name-row">

                                    <span className="address-name">
                                        Work
                                    </span>

                                </div>

                                <p>
                                    Parkway Mountain View,
                                    California,
                                    United States
                                </p>

                            </div>


                            {selectedAddress === "work" && (
                                <div className="selected-check">
                                    ✓
                                </div>
                            )}

                        </div>

                    </section>


                    {/* =================================
                        DELIVERY INFORMATION
                    ================================= */}

                    <section className="checkout-card delivery-info">

                        <div className="info-box">

                            <div className="info-icon">
                                🚴
                            </div>

                            <div>

                                <h3>
                                    Fast Delivery
                                </h3>

                                <p>
                                    Your food will be delivered
                                    fresh and hot to your selected address.
                                </p>

                            </div>

                        </div>


                        <div className="info-box">

                            <div className="info-icon">
                                🛡️
                            </div>

                            <div>

                                <h3>
                                    Safe & Secure
                                </h3>

                                <p>
                                    Your payment and personal
                                    information are protected.
                                </p>

                            </div>

                        </div>

                    </section>

                </div>


                {/* =================================
                    RIGHT SIDE
                ================================= */}

                <div className="checkout-right">

                    <section className="order-card">


                        {/* =================================
                            ORDER HEADER
                        ================================= */}

                        <div className="order-card-header">

                            <div>

                                <h2>
                                    Order Summary
                                </h2>

                                <p>
                                    {cart.length} item
                                    {cart.length !== 1 ? "s" : ""}
                                </p>

                            </div>

                            <span className="bag-icon">
                                🛍️
                            </span>

                        </div>


                        {/* =================================
                            CART ITEMS
                        ================================= */}

                        <div className="checkout-items">

                            {cart.map((item, index) => (

                                <div
                                    key={index}
                                    className="checkout-item"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.dish}
                                    />


                                    <div className="checkout-item-info">

                                        <h3>
                                            {item.dish}
                                        </h3>

                                        <p>
                                            ₹
                                            {Number(
                                                item.price
                                            ).toFixed(2)}

                                            {" "}×{" "}

                                            {item.quantity}
                                        </p>

                                    </div>


                                    <strong>
                                        ₹
                                        {(
                                            Number(item.price) *
                                            Number(item.quantity)
                                        ).toFixed(2)}
                                    </strong>

                                </div>

                            ))}

                        </div>


                        {/* =================================
                            PRICE
                        ================================= */}

                        <div className="price-section">

                            <div className="price-row">

                                <span>
                                    Subtotal
                                </span>

                                <span>
                                    ₹{subtotal.toFixed(2)}
                                </span>

                            </div>


                            <div className="price-row">

                                <span>
                                    Tax (10%)
                                </span>

                                <span>
                                    ₹{tax.toFixed(2)}
                                </span>

                            </div>


                            <div className="price-row">

                                <span>
                                    Delivery Fee
                                </span>

                                <span className="delivery-price">
                                    ₹{deliveryFee.toFixed(2)}
                                </span>

                            </div>

                        </div>


                        {/* =================================
                            TOTAL
                        ================================= */}

                        <div className="grand-total">

                            <div>

                                <span>
                                    Total Amount
                                </span>

                                <small>
                                    Inclusive of all charges
                                </small>

                            </div>

                            <strong>
                                ₹{total.toFixed(2)}
                            </strong>

                        </div>


                        {/* =================================
                            PAY BUTTON
                        ================================= */}

                        <button
                            className="pay-now"
                            onClick={handleProceedToPayment}
                        >

                            <span>
                                Proceed to Payment
                            </span>

                            <span>
                                →
                            </span>

                        </button>


                        <div className="payment-security">

                            🔒 Payments are 100% secure

                        </div>

                    </section>

                </div>

            </div>

        </div>
    );
};

export default CheckoutPage;