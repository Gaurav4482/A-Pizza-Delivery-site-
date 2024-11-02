import React, { useState, useEffect } from 'react';

const OrderStatus = ({ orderId }) => {
    const [status, setStatus] = useState("Loading...");

    useEffect(() => {
        const interval = setInterval(async() => {
            const response = await fetch(`/orders/${orderId}/status`);
            const data = await response.json();
            setStatus(data.status);
        }, 5000);

        return () => clearInterval(interval);
    }, [orderId]);

    return <p > Order Status: { status } < /p>;
};

export default OrderStatus;