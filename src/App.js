import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footers from "./components/Footers";
import { CartProvider } from "./components/CartContext";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import PaymentPage from "./components/PaymentPage";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />  
            <Footers />
        </div>
    );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>  
        <AppLayout />
      </CartProvider>
    ),
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <CartPage /> }, 
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/payment", element: <PaymentPage /> }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
