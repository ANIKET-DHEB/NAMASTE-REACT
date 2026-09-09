import React, { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("swifteats-wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "swifteats-wishlist",
            JSON.stringify(wishlist)
        );
    }, [wishlist]);

    const isInWishlist = (restaurantId) => {
        return wishlist.some(
            (restaurant) => restaurant.data.id === restaurantId
        );
    };

    const toggleWishlist = (restaurant) => {
        const restaurantId = restaurant.data.id;

        setWishlist((prevWishlist) => {
            const alreadyExists = prevWishlist.some(
                (item) => item.data.id === restaurantId
            );

            if (alreadyExists) {
                return prevWishlist.filter(
                    (item) => item.data.id !== restaurantId
                );
            }

            return [...prevWishlist, restaurant];
        });
    };

    const removeFromWishlist = (restaurantId) => {
        setWishlist((prevWishlist) =>
            prevWishlist.filter(
                (item) => item.data.id !== restaurantId
            )
        );
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                toggleWishlist,
                removeFromWishlist,
                isInWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    return useContext(WishlistContext);
};