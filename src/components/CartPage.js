import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; 
    const deliveryFee = 5;
    const total = subtotal + tax + deliveryFee;

    return (
        <div className="cart-container">
            <h1 className="cart-header">Your Cart</h1>
            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty 🛒</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.dish} className="cart-image" />
                                <div className="cart-details">
                                    <h2>{item.dish}</h2>
                                    <p>₹{item.price.toFixed(2)}</p>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(index)}>❌</button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
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
                    <div className="cart-buttons">
                    <button className="shop-more" onClick={() => navigate("/")}>Shop More</button>
                    <button className="checkout" onClick={() => navigate("/checkout")}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
