import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const CartPage = () => {
    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    const navigate = useNavigate();

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const tax = subtotal * 0.1;
    const deliveryFee = subtotal > 0 ? 5 : 0;
    const total = subtotal + tax + deliveryFee;

    return (
        <div className="cart-container">

            <h1 className="cart-header">
                Your Cart 🛒
            </h1>

            {cart.length === 0 ? (
                <div className="empty-cart">

                    <div className="empty-cart-icon">
                        🛒
                    </div>

                    <h2>Your cart is empty</h2>

                    <p>
                        Looks like you haven't added
                        anything to your cart yet.
                    </p>

                    <button
                        className="shop-more"
                        onClick={() => navigate("/")}
                    >
                        Browse Restaurants
                    </button>

                </div>
            ) : (
                <>
                    {/* CART ITEMS */}

                    <div className="cart-items">

                        {cart.map((item, index) => (
                            <div
                                key={`${item.dish}-${index}`}
                                className="cart-item"
                            >

                                <img
                                    src={item.image}
                                    alt={item.dish}
                                    className="cart-image"
                                />

                                <div className="cart-details">

                                    <h2>
                                        {item.dish}
                                    </h2>

                                    <p>
                                        ₹{item.price.toFixed(2)}
                                    </p>

                                    <div className="cart-quantity">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(index)
                                            }
                                        >
                                            −
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(index)
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                                <div className="cart-item-right">

                                    <strong>
                                        ₹
                                        {(
                                            item.price *
                                            item.quantity
                                        ).toFixed(2)}
                                    </strong>

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeFromCart(index)
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* SUMMARY */}

                    <div className="cart-summary">

                        <div className="summary-item">
                            <span>Subtotal</span>

                            <span>
                                ₹{subtotal.toFixed(2)}
                            </span>
                        </div>

                        <div className="summary-item">
                            <span>Tax (10%)</span>

                            <span>
                                ₹{tax.toFixed(2)}
                            </span>
                        </div>

                        <div className="summary-item">
                            <span>Delivery</span>

                            <span>
                                ₹{deliveryFee.toFixed(2)}
                            </span>
                        </div>

                        <div className="summary-item total">
                            <span>Total</span>

                            <span>
                                ₹{total.toFixed(2)}
                            </span>
                        </div>

                    </div>

                    {/* BUTTONS */}

                    <div className="cart-buttons">

                        <button
                            type="button"
                            className="shop-more"
                            onClick={() => navigate("/")}
                        >
                            ← Shop More
                        </button>

                        <button
                            type="button"
                            className="checkout"
                            onClick={() => navigate("/checkout")}
                        >
                            Checkout →
                        </button>

                    </div>

                </>
            )}

        </div>
    );
};

export default CartPage;