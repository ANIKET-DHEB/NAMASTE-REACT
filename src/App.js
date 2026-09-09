import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footers from "./components/Footers";

import { CartProvider } from "./components/CartContext";
import { OrderProvider } from "./components/OrderContext";
import { WishlistProvider } from "./components/WishlistContext";

import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import PaymentPage from "./components/PaymentPage";
import MyOrders from "./components/MyOrders";

import "./styles/Global.css";
import "./styles/Header.css";
import "./styles/Body.css";
import "./styles/Footer.css";
import "./styles/About.css";
import "./styles/Contact.css";
import "./styles/RestaurantMenu.css";
import "./styles/Cart.css";
import "./styles/Checkout.css";
import "./styles/Payment.css";
import "./styles/MyOrders.css";


// ========================================
// SCROLL TO TOP
// ========================================

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    return null;
};


// ========================================
// APP LAYOUT
// ========================================

const AppLayout = () => {
    return (
        <div className="app">

            <ScrollToTop />

            <Header />

            <Outlet />

            <Footers />

        </div>
    );
};


// ========================================
// ROUTER
// ========================================

const appRouter = createBrowserRouter([
    {
        path: "/",

        element: (
            <WishlistProvider>
                <CartProvider>
                    <OrderProvider>
                        <AppLayout />
                    </OrderProvider>
                </CartProvider>
            </WishlistProvider>
        ),

        children: [

            // ========================================
            // HOME
            // ========================================

            {
                path: "/",
                element: <Body />,
            },


            // ========================================
            // ABOUT
            // ========================================

            {
                path: "/about",
                element: <About />,
            },


            // ========================================
            // CONTACT
            // ========================================

            {
                path: "/contact",
                element: <Contact />,
            },


            // ========================================
            // RESTAURANT MENU
            // ========================================

            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },


            // ========================================
            // CART
            // ========================================

            {
                path: "/cart",
                element: <CartPage />,
            },


            // ========================================
            // CHECKOUT
            // ========================================

            {
                path: "/checkout",
                element: <CheckoutPage />,
            },


            // ========================================
            // PAYMENT
            // ========================================

            {
                path: "/payment",
                element: <PaymentPage />,
            },


            // ========================================
            // MY ORDERS
            // ========================================

            {
                path: "/my-orders",
                element: <MyOrders />,
            },

        ],

        errorElement: <Error />,
    },
]);


// ========================================
// ROOT
// ========================================

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <RouterProvider router={appRouter} />
);