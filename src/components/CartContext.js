import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Add item to cart
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (cartItem) => cartItem.dish === item.dish
            );

            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.dish === item.dish
                        ? {
                              ...cartItem,
                              quantity:
                                  cartItem.quantity + item.quantity,
                          }
                        : cartItem
                );
            }

            return [...prevCart, item];
        });
    };

    // Increase quantity
    const increaseQuantity = (index) => {
        setCart((prevCart) =>
            prevCart.map((item, i) =>
                i === index
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item
            )
        );
    };

    // Decrease quantity
    const decreaseQuantity = (index) => {
        setCart((prevCart) =>
            prevCart
                .map((item, i) =>
                    i === index
                        ? {
                              ...item,
                              quantity: item.quantity - 1,
                          }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // Remove item completely
    const removeFromCart = (index) => {
        setCart((prevCart) =>
            prevCart.filter((_, i) => i !== index)
        );
    };

    // Total number of items
    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Clear cart after successful order
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                cartCount,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used within a CartProvider"
        );
    }

    return context;
};