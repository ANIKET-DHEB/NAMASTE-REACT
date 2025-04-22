import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";
import { FaRegCreditCard, FaCalendarAlt, FaLock } from "react-icons/fa"; // Icons for card details

const Payment = () => {
    const navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handlePayment = () => {
        if (selectedPayment) {
            if (["Google Pay", "PhonePe", "Paytm"].includes(selectedPayment) &&
                (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv)
            ) {
                alert("Please enter debit card details.");
                return;
            }
            alert(`Payment via ${selectedPayment} is successful! 🎉`);
            navigate("/");
        } else {
            alert("Please select a payment method.");
        }
    };

    return (
        <div className="payment-container">
            <h1 className="payment-title">Choose a Payment Method</h1>

            <div className="payment-options">
                {[
                    { name: "Google Pay", icon: <FaGooglePay className="payment-icon gpay" /> },
                    { name: "PhonePe", icon: <SiPhonepe className="payment-icon phonepe" /> },
                    { name: "Paytm", icon: <SiPaytm className="payment-icon paytm" /> },
                    { name: "Cash on Delivery", icon: <MdOutlinePayments className="payment-icon cod" /> }
                ].map(({ name, icon }) => (
                    <div 
                        key={name}
                        className={`payment-option ${selectedPayment === name ? "selected" : ""}`}
                        onClick={() => setSelectedPayment(name)}
                    >
                        {icon}
                        <span>{name}</span>
                    </div>
                ))}
            </div>

            {/* Show debit card details form if a UPI payment is selected */}
            {["Google Pay", "PhonePe", "Paytm"].includes(selectedPayment) && (
                <div className="card-details">
                    <h3 className="card-title">Enter Debit Card Details</h3>
                    
                    <div className="card-input">
                        <FaRegCreditCard className="input-icon" />
                        <input 
                            type="text" 
                            placeholder="Card Number" 
                            maxLength="16"
                            value={cardDetails.cardNumber}
                            onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                        />
                    </div>

                    <div className="card-row">
                        <div className="card-input">
                            <FaCalendarAlt className="input-icon" />
                            <input 
                                type="text" 
                                placeholder="MM/YY" 
                                maxLength="5"
                                value={cardDetails.expiryDate}
                                onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                            />
                        </div>

                        <div className="card-input">
                            <FaLock className="input-icon" />
                            <input 
                                type="password" 
                                placeholder="CVV" 
                                maxLength="3"
                                value={cardDetails.cvv}
                                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* QR Scanner Option for UPI Transactions */}
            {["Google Pay", "PhonePe", "Paytm"].includes(selectedPayment) && (
                <div className="qr-scanner">
                    <h3>Scan QR Code to Pay</h3>
                    <img 
                        src="https://media.istockphoto.com/id/518484289/photo/close-up-of-qr-code-example.jpg?s=612x612&w=0&k=20&c=WYplN2eQz0vhBOMSuDATYLLoZiP7Y_giUI44Q14zEzU=" 
                        alt="QR Code" 
                        className="qr-image" 
                    />
                </div>
            )}

            <button className="confirm-payment" onClick={handlePayment}>Confirm Payment</button>
        </div>
    );
};

export default Payment;
