const Order = require('../models/orderModel');
const orderItemController = require('../controllers/orderItemController');

// Tạo đơn hàng mới
class OrderController {
    async createOrder () {
        const { user_id, products } = req.body;
        try {
            const newOrder = new Order({
                user_id
            });
            const savedOrder = await newOrder.save();
            res.status(201).json(savedOrder);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
        orderItemController.createOrder();
    };

    async getAllOrders () {
        try {
            const orders = await Order.find().populate('user_id').populate('products.product');
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    async getOrderById () {
        try {
            const order = await Order.findById(req.params.id).populate('user_id').populate('products.product');
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    async updateOrder () {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(
                req.params.id,
                { ...req.body, updatedAt: Date.now() },
                { new: true }
            );
            if (!updatedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(updatedOrder);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    async deleteOrder () {
        try {
            const deletedOrder = await Order.findByIdAndDelete(req.params.id);
            if (!deletedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json({ message: 'Order deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

module.exports = new OrderController