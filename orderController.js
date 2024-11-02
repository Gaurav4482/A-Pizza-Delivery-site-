const Order = require('../models/Order');
const Inventory = require('../models/Inventory');

exports.placeOrder = async(req, res) => {
    const { userId, items, status } = req.body;
    const order = new Order({ userId, items, status: 'Order Received' });
    await order.save();

    // Update inventory here for each item in order
    items.forEach(async(item) => {
        const inventoryItem = await Inventory.findOne({ item: item.name });
        if (inventoryItem) {
            inventoryItem.quantity -= item.quantity;
            await inventoryItem.save();
        }
    });

    res.status(201).json({ message: "Order placed successfully." });
};

exports.updateOrderStatus = async(req, res) => {
    const { orderId, status } = req.body;
    const order = await Order.findById(orderId);
    if (order) {
        order.status = status;
        await order.save();
        res.json({ message: "Order status updated." });
    } else {
        res.status(404).json({ message: "Order not found." });
    }
};