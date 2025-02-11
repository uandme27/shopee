const Order = require('../models/orderModel');

class OrderItemController {
    async createOrder () {
        try {
            const { user_id, products } = req.body;
            const newOrder = new Order({
                user_id,
                products
            });
            const savedOrder = await newOrder.save();
            res.status(201).json(savedOrder);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

module.exports = new OrderItemController