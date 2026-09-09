import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { useOrders } from "./OrderContext";

import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";

import {
    FaRegCreditCard,
    FaCalendarAlt,
    FaLock,
    FaArrowLeft,
    FaShieldAlt,
    FaCheckCircle,
} from "react-icons/fa";

import "../styles/Payment.css";

const PaymentPage = () => {
    const navigate = useNavigate();

    // ========================================
    // CART
    // ========================================

    const { cart, clearCart } = useCart();

    // ========================================
    // ORDERS
    // ========================================

    const { addOrder } = useOrders();

    // ========================================
    // PAYMENT STATE
    // ========================================

    const [selectedPayment, setSelectedPayment] =
        useState(null);

    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    // ========================================
    // CALCULATE TOTALS
    // ========================================

    const subtotal = cart.reduce(
        (sum, item) =>
            sum +
            Number(item.price) *
                Number(item.quantity),
        0
    );

    const tax = subtotal * 0.1;

    const deliveryFee = subtotal > 0 ? 5 : 0;

    const total =
        subtotal +
        tax +
        deliveryFee;

    // ========================================
    // PAYMENT METHODS
    // ========================================

    const paymentMethods = [
        {
            name: "Google Pay",
            subtitle:
                "Pay securely using Google Pay",
            icon: <FaGooglePay />,
            className: "gpay",
        },

        {
            name: "PhonePe",
            subtitle:
                "Fast and secure UPI payment",
            icon: <SiPhonepe />,
            className: "phonepe",
        },

        {
            name: "Paytm",
            subtitle:
                "Pay using your Paytm wallet",
            icon: <SiPaytm />,
            className: "paytm",
        },

        {
            name: "Cash on Delivery",
            subtitle:
                "Pay when your order arrives",
            icon: <MdOutlinePayments />,
            className: "cod",
        },
    ];

    // ========================================
    // ONLINE PAYMENT CHECK
    // ========================================

    const isOnlinePayment = [
        "Google Pay",
        "PhonePe",
        "Paytm",
    ].includes(selectedPayment);

    // ========================================
    // FORMAT CARD NUMBER
    // ========================================

    const formatCardNumber = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(.{4})/g, "$1 ")
            .trim();
    };

    // ========================================
    // CARD NUMBER
    // ========================================

    const handleCardNumber = (e) => {
        let value = e.target.value
            .replace(/\D/g, "")
            .slice(0, 16);

        setCardDetails((previous) => ({
            ...previous,
            cardNumber: value,
        }));
    };

    // ========================================
    // EXPIRY DATE
    // ========================================

    const handleExpiry = (e) => {
        let value = e.target.value
            .replace(/\D/g, "")
            .slice(0, 4);

        if (value.length >= 3) {
            value =
                value.substring(0, 2) +
                "/" +
                value.substring(2);
        }

        setCardDetails((previous) => ({
            ...previous,
            expiryDate: value,
        }));
    };

    // ========================================
    // CVV
    // ========================================

    const handleCVV = (e) => {
        let value = e.target.value
            .replace(/\D/g, "")
            .slice(0, 3);

        setCardDetails((previous) => ({
            ...previous,
            cvv: value,
        }));
    };

    // ========================================
    // HANDLE PAYMENT
    // ========================================

    const handlePayment = () => {
        // No payment method
        if (!selectedPayment) {
            alert(
                "Please select a payment method."
            );
            return;
        }

        // Empty cart
        if (cart.length === 0) {
            alert("Your cart is empty.");
            navigate("/");
            return;
        }

        // Online payment validation
        if (isOnlinePayment) {
            if (
                cardDetails.cardNumber.length !==
                16
            ) {
                alert(
                    "Please enter a valid 16-digit card number."
                );
                return;
            }

            if (
                cardDetails.expiryDate.length !==
                5
            ) {
                alert(
                    "Please enter a valid expiry date."
                );
                return;
            }

            if (
                cardDetails.cvv.length !== 3
            ) {
                alert(
                    "Please enter a valid 3-digit CVV."
                );
                return;
            }
        }

        // ========================================
        // CREATE ORDER
        // ========================================

        addOrder({
            items: cart,

            subtotal: Number(
                subtotal.toFixed(2)
            ),

            tax: Number(
                tax.toFixed(2)
            ),

            deliveryFee: Number(
                deliveryFee.toFixed(2)
            ),

            total: Number(
                total.toFixed(2)
            ),

            paymentMethod:
                selectedPayment,

            address: "Home",

            customerAddress:
                "66, 3rd Flr, Bldg No-3, Sabu-Siddik Road, Near Carnac Bridge",
        });

        // ========================================
        // CLEAR CART
        // ========================================

        clearCart();

        // ========================================
        // SUCCESS MESSAGE
        // ========================================

        alert(
            `Payment via ${selectedPayment} is successful! 🎉`
        );

        // ========================================
        // GO TO MY ORDERS
        // ========================================

        navigate("/my-orders");
    };

    // ========================================
    // JSX
    // ========================================

    return (
        <div className="payment-page">

            {/* =================================
                BACK BUTTON
            ================================= */}

            <button
                className="payment-back"
                onClick={() =>
                    navigate("/checkout")
                }
            >
                <FaArrowLeft />

                Back to Checkout
            </button>

            {/* =================================
                PAYMENT WRAPPER
            ================================= */}

            <div className="payment-wrapper">

                {/* =================================
                    LEFT SIDE
                ================================= */}

                <div className="payment-main">

                    {/* HEADING */}

                    <div className="payment-heading">

                        <div className="payment-heading-icon">
                            <MdOutlinePayments />
                        </div>

                        <div>
                            <h1>
                                Choose Payment Method
                            </h1>

                            <p>
                                Select your preferred
                                way to pay securely
                            </p>
                        </div>

                    </div>

                    {/* =================================
                        PAYMENT OPTIONS
                    ================================= */}

                    <div className="payment-section">

                        <h2>
                            Payment Options
                        </h2>

                        <div className="payment-options">

                            {paymentMethods.map(
                                ({
                                    name,
                                    subtitle,
                                    icon,
                                    className,
                                }) => (

                                    <div
                                        key={name}
                                        className={`payment-option ${
                                            selectedPayment ===
                                            name
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setSelectedPayment(
                                                name
                                            )
                                        }
                                    >

                                        <div
                                            className={`method-icon ${className}`}
                                        >
                                            {icon}
                                        </div>

                                        <div className="method-info">

                                            <h3>
                                                {name}
                                            </h3>

                                            <p>
                                                {subtitle}
                                            </p>

                                        </div>

                                        <div className="method-radio">

                                            {selectedPayment ===
                                                name && (
                                                <FaCheckCircle />
                                            )}

                                        </div>

                                    </div>
                                )
                            )}

                        </div>

                    </div>

                    {/* =================================
                        PAYMENT DETAILS
                    ================================= */}

                    {isOnlinePayment && (

                        <div className="payment-details">

                            <div className="details-heading">

                                <div>

                                    <h2>
                                        Payment Details
                                    </h2>

                                    <p>
                                        Enter your card
                                        details to continue
                                    </p>

                                </div>

                                <FaShieldAlt />

                            </div>

                            {/* CARD NUMBER */}

                            <div className="input-group">

                                <label>
                                    Card Number
                                </label>

                                <div className="payment-input">

                                    <FaRegCreditCard />

                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="1234 5678 9012 3456"
                                        value={formatCardNumber(
                                            cardDetails.cardNumber
                                        )}
                                        onChange={
                                            handleCardNumber
                                        }
                                    />

                                </div>

                            </div>

                            {/* EXPIRY + CVV */}

                            <div className="card-row">

                                {/* EXPIRY */}

                                <div className="input-group">

                                    <label>
                                        Expiry Date
                                    </label>

                                    <div className="payment-input">

                                        <FaCalendarAlt />

                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            placeholder="MM/YY"
                                            maxLength="5"
                                            value={
                                                cardDetails.expiryDate
                                            }
                                            onChange={
                                                handleExpiry
                                            }
                                        />

                                    </div>

                                </div>

                                {/* CVV */}

                                <div className="input-group">

                                    <label>
                                        CVV
                                    </label>

                                    <div className="payment-input">

                                        <FaLock />

                                        <input
                                            type="password"
                                            inputMode="numeric"
                                            placeholder="•••"
                                            maxLength="3"
                                            value={
                                                cardDetails.cvv
                                            }
                                            onChange={
                                                handleCVV
                                            }
                                        />

                                    </div>

                                </div>

                            </div>

                            {/* SECURE MESSAGE */}

                            <div className="secure-message">

                                <FaShieldAlt />

                                <span>
                                    Your payment
                                    information is
                                    encrypted and secure.
                                </span>

                            </div>

                        </div>
                    )}

                    {/* =================================
                        QR CODE
                    ================================= */}

                    {isOnlinePayment && (

                        <div className="qr-section">

                            <div>

                                <h2>
                                    Scan & Pay
                                </h2>

                                <p>
                                    Scan the QR code
                                    using your selected
                                    UPI app
                                </p>

                            </div>

                            <img
                                src="https://media.istockphoto.com/id/518484289/photo/close-up-of-qr-code-example.jpg?s=612x612&w=0&k=20&c=WYplN2eQz0vhBOMSuDATYLLoZiP7Y_giUI44Q14zEzU="
                                alt="Payment QR Code"
                            />

                        </div>
                    )}

                    {/* =================================
                        CONFIRM PAYMENT
                    ================================= */}

                    <button
                        className="confirm-payment"
                        onClick={handlePayment}
                    >
                        {selectedPayment
                            ? `Pay Securely with ${selectedPayment}`
                            : "Select Payment Method"}
                    </button>

                    {/* =================================
                        SECURITY
                    ================================= */}

                    <div className="payment-security">

                        <FaShieldAlt />

                        <span>
                            100% Secure Payment
                        </span>

                        <span className="security-dot">
                            •
                        </span>

                        <span>
                            Safe & Encrypted
                        </span>

                    </div>

                </div>

                {/* =================================
                    RIGHT SIDE
                ================================= */}

                <div className="payment-summary">

                    <div className="summary-top">

                        <h2>
                            Order Summary
                        </h2>

                        <span>
                            SwiftEats
                        </span>

                    </div>

                    {/* SUMMARY FOOD */}

                    <div className="summary-food">

                        <div className="food-placeholder">
                            🍔
                        </div>

                        <div>

                            <h3>
                                Your SwiftEats Order
                            </h3>

                            <p>
                                Delicious food
                                delivered to your
                                doorstep
                            </p>

                        </div>

                    </div>

                    <div className="summary-divider"></div>

                    {/* SUBTOTAL */}

                    <div className="price-row">

                        <span>
                            Subtotal
                        </span>

                        <span>
                            ₹{subtotal.toFixed(2)}
                        </span>

                    </div>

                    {/* TAX */}

                    <div className="price-row">

                        <span>
                            Tax (10%)
                        </span>

                        <span>
                            ₹{tax.toFixed(2)}
                        </span>

                    </div>

                    {/* DELIVERY */}

                    <div className="price-row">

                        <span>
                            Delivery Fee
                        </span>

                        <span>
                            ₹{deliveryFee.toFixed(2)}
                        </span>

                    </div>

                    <div className="summary-divider"></div>

                    {/* TOTAL */}

                    <div className="total-row">

                        <span>
                            Total
                        </span>

                        <strong>
                            ₹{total.toFixed(2)}
                        </strong>

                    </div>

                    {/* DELIVERY MESSAGE */}

                    <div className="delivery-message">

                        🚀

                        <div>

                            <strong>
                                Fast Delivery
                            </strong>

                            <p>
                                Your order will be
                                prepared shortly
                                after payment.
                            </p>

                        </div>

                    </div>

                    {/* EDIT ORDER */}

                    <button
                        className="edit-order"
                        onClick={() =>
                            navigate("/checkout")
                        }
                    >
                        ← Edit Order
                    </button>

                </div>

            </div>

        </div>
    );
};

export default PaymentPage;