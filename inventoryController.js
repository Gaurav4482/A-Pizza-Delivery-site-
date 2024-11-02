const Inventory = require('../models/Inventory');

exports.updateInventory = async(req, res) => {
    const { item, quantity } = req.body;
    const inventoryItem = await Inventory.findOne({ item });
    if (inventoryItem) {
        inventoryItem.quantity = quantity;
        await inventoryItem.save();
        res.json({ message: "Inventory updated successfully." });
    } else {
        res.status(404).json({ message: "Item not found." });
    }
};