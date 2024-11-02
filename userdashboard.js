import React, { useState, useEffect } from 'react';
import { placeOrder } from '../services/api';

const UserDashboard = () => {
    const [orderStatus, setOrderStatus] = useState('No current orders');

    const handlePlaceOrder = async() => {
        const response = await placeOrder({ userId: 1, items: [{ name: 'Base', quantity: 1 }] });
        if (response.status === 201) setOrderStatus('Order placed successfully!');
    };

    return ( <
        div >
        <
        h2 > Welcome to Your Dashboard < /h2> <
        button onClick = { handlePlaceOrder } > Place Order < /button> <
        p > { orderStatus } < /p> <
        /div>
    );
};

export default UserDashboard;