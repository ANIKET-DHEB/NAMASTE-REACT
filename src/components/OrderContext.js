import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {

    // ========================================
    // LOAD ORDERS
    // ========================================

    const [orders, setOrders] = useState(() => {
        try {
            const savedOrders =
                localStorage.getItem("swiftEatsOrders");

            return savedOrders
                ? JSON.parse(savedOrders)
                : [];
        } catch (error) {
            console.error(
                "Failed to load orders:",
                error
            );

            return [];
        }
    });

    // ========================================
    // SAVE ORDERS
    // ========================================

    useEffect(() => {
        localStorage.setItem(
            "swiftEatsOrders",
            JSON.stringify(orders)
        );
    }, [orders]);

    // ========================================
    // CREATE NEW ORDER
    // ========================================

    const addOrder = (orderData) => {

        const newOrder = {
            id: `SE${Date.now()}`,

            date: new Date().toISOString(),

            status: "Order Placed",

            statusStep: 1,

            ...orderData,
        };

        setOrders((previousOrders) => [
            newOrder,
            ...previousOrders,
        ]);

        return newOrder;
    };

    // ========================================
    // UPDATE ORDER STATUS
    // ========================================

    const updateOrderStatus = useCallback(
        (orderId, newStatus, newStep) => {

            setOrders((previousOrders) =>
                previousOrders.map((order) =>
                    order.id === orderId
                        ? {
                              ...order,
                              status: newStatus,
                              statusStep: newStep,
                          }
                        : order
                )
            );
        },
        []
    );

    // ========================================
    // CLEAR ALL ORDERS
    // ========================================

    const clearOrders = () => {
        setOrders([]);
    };

    // ========================================
    // CONTEXT
    // ========================================

    return (
        <OrderContext.Provider
            value={{
                orders,
                addOrder,
                updateOrderStatus,
                clearOrders,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};

// ========================================
// CUSTOM HOOK
// ========================================

export const useOrders = () => {

    const context = useContext(OrderContext);

    if (!context) {
        throw new Error(
            "useOrders must be used inside OrderProvider"
        );
    }

    return context;
};