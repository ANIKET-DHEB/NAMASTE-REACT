import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOrders } from "./OrderContext";

import {
    FaReceipt,
    FaShoppingBag,
    FaArrowRight,
    FaTrash,
    FaCheckCircle,
    FaUtensils,
    FaMotorcycle,
    FaBoxOpen,
} from "react-icons/fa";

import "../styles/MyOrders.css";

const MyOrders = () => {

    const {
        orders,
        clearOrders,
        updateOrderStatus,
    } = useOrders();

    const navigate = useNavigate();

    // ========================================
    // FORMAT DATE
    // ========================================

    const formatDate = (date) => {

        return new Date(date).toLocaleString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }
        );
    };

    // ========================================
    // AUTOMATIC ORDER TRACKING
    // ========================================

    useEffect(() => {

        if (orders.length === 0) {
            return;
        }

        const timers = [];

        orders.forEach((order) => {

            const currentStep =
                order.statusStep || 1;

            // --------------------------------
            // PREPARING
            // --------------------------------

            if (currentStep < 2) {

                timers.push(
                    setTimeout(() => {

                        updateOrderStatus(
                            order.id,
                            "Preparing",
                            2
                        );

                    }, 10000)
                );
            }

            // --------------------------------
            // OUT FOR DELIVERY
            // --------------------------------

            if (currentStep < 3) {

                timers.push(
                    setTimeout(() => {

                        updateOrderStatus(
                            order.id,
                            "Out for Delivery",
                            3
                        );

                    }, 20000)
                );
            }

            // --------------------------------
            // DELIVERED
            // --------------------------------

            if (currentStep < 4) {

                timers.push(
                    setTimeout(() => {

                        updateOrderStatus(
                            order.id,
                            "Delivered",
                            4
                        );

                    }, 30000)
                );
            }

        });

        // --------------------------------
        // CLEANUP
        // --------------------------------

        return () => {

            timers.forEach((timer) => {
                clearTimeout(timer);
            });

        };

    }, [orders, updateOrderStatus]);

    // ========================================
    // EMPTY ORDERS
    // ========================================

    if (orders.length === 0) {

        return (
            <main className="orders-page">

                <div className="orders-header">

                    <div>

                        <span className="orders-small-title">
                            ORDER HISTORY
                        </span>

                        <h1>
                            My Orders
                        </h1>

                        <p>
                            Track your previous SwiftEats
                            orders all in one place.
                        </p>

                    </div>

                </div>

                <div className="empty-orders">

                    <div className="empty-orders-icon">
                        <FaShoppingBag />
                    </div>

                    <h2>
                        No orders yet
                    </h2>

                    <p>
                        You haven't placed any orders yet.
                        Start exploring delicious food!
                    </p>

                    <button
                        className="start-order-btn"
                        onClick={() => navigate("/")}
                    >
                        Explore Restaurants

                        <FaArrowRight />
                    </button>

                </div>

            </main>
        );
    }

    // ========================================
    // MAIN PAGE
    // ========================================

    return (
        <main className="orders-page">

            {/* =================================
                HEADER
            ================================= */}

            <div className="orders-header">

                <div>

                    <span className="orders-small-title">
                        ORDER HISTORY
                    </span>

                    <h1>
                        My Orders
                    </h1>

                    <p>
                        View and track all your previous
                        SwiftEats orders.
                    </p>

                </div>

                <button
                    className="clear-orders-btn"
                    onClick={() => {

                        const confirmDelete =
                            window.confirm(
                                "Are you sure you want to clear all orders?"
                            );

                        if (confirmDelete) {
                            clearOrders();
                        }

                    }}
                >
                    <FaTrash />

                    Clear History

                </button>

            </div>

            {/* =================================
                ORDER COUNT
            ================================= */}

            <div className="order-count">

                <FaReceipt />

                <span>
                    {orders.length}{" "}
                    {orders.length === 1
                        ? "Order"
                        : "Orders"}
                </span>

            </div>

            {/* =================================
                ORDERS
            ================================= */}

            <div className="orders-list">

                {orders.map((order) => {

                    const currentStep =
                        order.statusStep || 1;

                    return (

                        <div
                            className="order-card"
                            key={order.id}
                        >

                            {/* =================================
                                ORDER HEADER
                            ================================= */}

                            <div className="order-top">

                                <div className="order-id">

                                    <div className="order-icon">
                                        <FaReceipt />
                                    </div>

                                    <div>

                                        <span>
                                            ORDER ID
                                        </span>

                                        <strong>
                                            #{order.id}
                                        </strong>

                                    </div>

                                </div>

                                <div className="order-status">

                                    <span className="status-dot"></span>

                                    {order.status ||
                                        "Order Placed"}

                                </div>

                            </div>

                            {/* =================================
                                DATE
                            ================================= */}

                            <div className="order-date">

                                Ordered on{" "}
                                {formatDate(order.date)}

                            </div>

                            {/* =================================
                                TRACKING
                            ================================= */}

                            <div className="order-tracking">

                                <h3>
                                    Track Your Order
                                </h3>

                                <div className="tracking-wrapper">

                                    <div className="tracking-line"></div>

                                    <div className="tracking-steps">

                                        {/* STEP 1 */}

                                        <div
                                            className={`tracking-step ${
                                                currentStep >= 1
                                                    ? "completed"
                                                    : ""
                                            }`}
                                        >

                                            <div className="tracking-icon">
                                                <FaCheckCircle />
                                            </div>

                                            <span>
                                                Order Placed
                                            </span>

                                        </div>

                                        {/* STEP 2 */}

                                        <div
                                            className={`tracking-step ${
                                                currentStep >= 2
                                                    ? "completed"
                                                    : ""
                                            }`}
                                        >

                                            <div className="tracking-icon">
                                                <FaUtensils />
                                            </div>

                                            <span>
                                                Preparing
                                            </span>

                                        </div>

                                        {/* STEP 3 */}

                                        <div
                                            className={`tracking-step ${
                                                currentStep >= 3
                                                    ? "completed"
                                                    : ""
                                            }`}
                                        >

                                            <div className="tracking-icon">
                                                <FaMotorcycle />
                                            </div>

                                            <span>
                                                Out for Delivery
                                            </span>

                                        </div>

                                        {/* STEP 4 */}

                                        <div
                                            className={`tracking-step ${
                                                currentStep >= 4
                                                    ? "completed"
                                                    : ""
                                            }`}
                                        >

                                            <div className="tracking-icon">
                                                <FaBoxOpen />
                                            </div>

                                            <span>
                                                Delivered
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* =================================
                                ORDER ITEMS
                            ================================= */}

                            <div className="order-items">

                                <h3>
                                    Order Items
                                </h3>

                                {order.items?.map(
                                    (item, index) => (

                                        <div
                                            className="order-item"
                                            key={`${item.dish}-${index}`}
                                        >

                                            <div className="item-left">

                                                {item.image && (
                                                    <img
                                                        src={item.image}
                                                        alt={item.dish}
                                                    />
                                                )}

                                                <div>

                                                    <strong>
                                                        {item.dish}
                                                    </strong>

                                                    <span>
                                                        ₹
                                                        {Number(
                                                            item.price
                                                        ).toFixed(2)}

                                                        {" × "}

                                                        {item.quantity}

                                                    </span>

                                                </div>

                                            </div>

                                            <strong className="item-price">

                                                ₹
                                                {(
                                                    Number(
                                                        item.price
                                                    ) *
                                                    Number(
                                                        item.quantity
                                                    )
                                                ).toFixed(2)}

                                            </strong>

                                        </div>

                                    )
                                )}

                            </div>

                            {/* =================================
                                ORDER SUMMARY
                            ================================= */}

                            <div className="order-summary">

                                <div>

                                    <span>
                                        Subtotal
                                    </span>

                                    <strong>
                                        ₹
                                        {Number(
                                            order.subtotal || 0
                                        ).toFixed(2)}
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        Tax
                                    </span>

                                    <strong>
                                        ₹
                                        {Number(
                                            order.tax || 0
                                        ).toFixed(2)}
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        Delivery
                                    </span>

                                    <strong>
                                        ₹
                                        {Number(
                                            order.deliveryFee || 0
                                        ).toFixed(2)}
                                    </strong>

                                </div>

                                <div className="order-total">

                                    <span>
                                        Total Paid
                                    </span>

                                    <strong>
                                        ₹
                                        {Number(
                                            order.total || 0
                                        ).toFixed(2)}
                                    </strong>

                                </div>

                            </div>

                            {/* =================================
                                PAYMENT INFORMATION
                            ================================= */}

                            <div className="payment-info">

                                <span>
                                    Payment Method
                                </span>

                                <strong>
                                    {order.paymentMethod ||
                                        "Online Payment"}
                                </strong>

                            </div>

                            {/* =================================
                                DELIVERY ADDRESS
                            ================================= */}

                            <div className="payment-info">

                                <span>
                                    Delivery Address
                                </span>

                                <strong>
                                    {order.address ||
                                        "Home"}
                                </strong>

                            </div>

                        </div>

                    );
                })}

            </div>

            {/* =================================
                BOTTOM BUTTON
            ================================= */}

            <div className="orders-bottom">

                <button
                    className="continue-shopping-btn"
                    onClick={() => navigate("/")}
                >

                    Continue Shopping

                    <FaArrowRight />

                </button>

            </div>

        </main>
    );
};

export default MyOrders;