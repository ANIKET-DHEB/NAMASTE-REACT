import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];  
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));  
    }, [cart]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, item];
            console.log("Updated Cart:", updatedCart);
            return updatedCart;
        });
    };
    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart,removeFromCart  }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
