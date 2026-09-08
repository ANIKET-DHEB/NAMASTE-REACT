import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Payment = () => {
    const navigate = useNavigate();

    const [selectedPayment, setSelectedPayment] = useState(null);

    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const paymentMethods = [
        {
            name: "Google Pay",
            subtitle: "Pay securely using Google Pay",
            icon: <FaGooglePay />,
            className: "gpay",
        },
        {
            name: "PhonePe",
            subtitle: "Fast and secure UPI payment",
            icon: <SiPhonepe />,
            className: "phonepe",
        },
        {
            name: "Paytm",
            subtitle: "Pay using your Paytm wallet",
            icon: <SiPaytm />,
            className: "paytm",
        },
        {
            name: "Cash on Delivery",
            subtitle: "Pay when your order arrives",
            icon: <MdOutlinePayments />,
            className: "cod",
        },
    ];

    const isOnlinePayment = [
        "Google Pay",
        "PhonePe",
        "Paytm",
    ].includes(selectedPayment);

    const handlePayment = () => {
        if (!selectedPayment) {
            alert("Please select a payment method.");
            return;
        }

        if (
            isOnlinePayment &&
            (!cardDetails.cardNumber ||
                !cardDetails.expiryDate ||
                !cardDetails.cvv)
        ) {
            alert("Please enter your payment details.");
            return;
        }

        alert(`Payment via ${selectedPayment} is successful! 🎉`);

        navigate("/");
    };

    const handleCardNumber = (e) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 16) {
            value = value.slice(0, 16);
        }

        setCardDetails({
            ...cardDetails,
            cardNumber: value,
        });
    };

    const handleExpiry = (e) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 4) {
            value = value.slice(0, 4);
        }

        if (value.length >= 3) {
            value =
                value.substring(0, 2) +
                "/" +
                value.substring(2);
        }

        setCardDetails({
            ...cardDetails,
            expiryDate: value,
        });
    };

    const handleCVV = (e) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 3) {
            value = value.slice(0, 3);
        }

        setCardDetails({
            ...cardDetails,
            cvv: value,
        });
    };

    return (
        <div className="payment-page">

            {/* Back Button */}

            <button
                className="payment-back"
                onClick={() => navigate("/checkout")}
            >
                <FaArrowLeft />
                Back to Checkout
            </button>


            <div className="payment-wrapper">

                {/* LEFT SIDE */}

                <div className="payment-main">

                    <div className="payment-heading">

                        <div className="payment-heading-icon">
                            <MdOutlinePayments />
                        </div>

                        <div>
                            <h1>Choose Payment Method</h1>
                            <p>
                                Select your preferred way to pay securely
                            </p>
                        </div>

                    </div>


                    {/* Payment Methods */}

                    <div className="payment-section">

                        <h2>Payment Options</h2>

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
                                            selectedPayment === name
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setSelectedPayment(name)
                                        }
                                    >

                                        <div
                                            className={`method-icon ${className}`}
                                        >
                                            {icon}
                                        </div>


                                        <div className="method-info">

                                            <h3>{name}</h3>

                                            <p>{subtitle}</p>

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


                    {/* Card / Payment Details */}

                    {isOnlinePayment && (

                        <div className="payment-details">

                            <div className="details-heading">

                                <div>
                                    <h2>Payment Details</h2>

                                    <p>
                                        Enter your card details to
                                        continue
                                    </p>
                                </div>

                                <FaShieldAlt />

                            </div>


                            {/* Card Number */}

                            <div className="input-group">

                                <label>Card Number</label>

                                <div className="payment-input">

                                    <FaRegCreditCard />

                                    <input
                                        type="text"
                                        placeholder="1234 5678 9012 3456"
                                        value={cardDetails.cardNumber}
                                        onChange={
                                            handleCardNumber
                                        }
                                    />

                                </div>

                            </div>


                            <div className="card-row">

                                {/* Expiry */}

                                <div className="input-group">

                                    <label>Expiry Date</label>

                                    <div className="payment-input">

                                        <FaCalendarAlt />

                                        <input
                                            type="text"
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

                                    <label>CVV</label>

                                    <div className="payment-input">

                                        <FaLock />

                                        <input
                                            type="password"
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


                            <div className="secure-message">

                                <FaShieldAlt />

                                <span>
                                    Your payment information is
                                    encrypted and secure.
                                </span>

                            </div>

                        </div>

                    )}


                    {/* QR */}

                    {isOnlinePayment && (

                        <div className="qr-section">

                            <div>

                                <h2>Scan & Pay</h2>

                                <p>
                                    Scan the QR code using your
                                    selected UPI app
                                </p>

                            </div>

                            <img
                                src="https://media.istockphoto.com/id/518484289/photo/close-up-of-qr-code-example.jpg?s=612x612&w=0&k=20&c=WYplN2eQz0vhBOMSuDATYLLoZiP7Y_giUI44Q14zEzU="
                                alt="Payment QR Code"
                            />

                        </div>

                    )}


                    {/* Confirm Button */}

                    <button
                        className="confirm-payment"
                        onClick={handlePayment}
                    >
                        {selectedPayment
                            ? `Pay Securely with ${selectedPayment}`
                            : "Select Payment Method"}
                    </button>


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


                {/* RIGHT SIDE */}

                <div className="payment-summary">

                    <div className="summary-top">

                        <h2>Order Summary</h2>

                        <span>
                            SwiftEats
                        </span>

                    </div>


                    <div className="summary-food">

                        <div className="food-placeholder">
                            🍔
                        </div>

                        <div>

                            <h3>Your SwiftEats Order</h3>

                            <p>
                                Delicious food delivered
                                to your doorstep
                            </p>

                        </div>

                    </div>


                    <div className="summary-divider"></div>


                    <div className="price-row">

                        <span>Subtotal</span>

                        <span>₹588.00</span>

                    </div>


                    <div className="price-row">

                        <span>Tax (10%)</span>

                        <span>₹58.80</span>

                    </div>


                    <div className="price-row">

                        <span>Delivery Fee</span>

                        <span>₹5.00</span>

                    </div>


                    <div className="summary-divider"></div>


                    <div className="total-row">

                        <span>Total</span>

                        <strong>
                            ₹651.80
                        </strong>

                    </div>


                    <div className="delivery-message">

                        🚀

                        <div>

                            <strong>
                                Fast Delivery
                            </strong>

                            <p>
                                Your order will be prepared
                                shortly after payment.
                            </p>

                        </div>

                    </div>


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

export default Payment;