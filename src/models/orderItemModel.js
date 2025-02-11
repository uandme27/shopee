const OrderItem = require('../models/OrderItem');

class OrderItemController {
    // Tạo OrderItem mới
    async create(req, res) {
        try {
            const { order_id, product_id, quantity } = req.body;
            const newOrderItem = new OrderItem({ order_id, product_id, quantity });
            const savedOrderItem = await newOrderItem.save();
            res.status(201).json(savedOrderItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Lấy tất cả OrderItems
    async getAll(req, res) {
        try {
            const orderItems = await OrderItem.find()
                .populate('order_id')
                .populate('product_id');
            res.status(200).json(orderItems);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Lấy OrderItem theo ID
    async getById(req, res) {
        try {
            const orderItem = await OrderItem.findById(req.params.id)
                .populate('order_id')
                .populate('product_id');
            if (!orderItem) {
                return res.status(404).json({ message: 'OrderItem not found' });
            }
            res.status(200).json(orderItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Cập nhật OrderItem
    async update(req, res) {
        try {
            const { quantity } = req.body;
            const updatedOrderItem = await OrderItem.findByIdAndUpdate(
                req.params.id,
                { quantity },
                { new: true }
            );
            if (!updatedOrderItem) {
                return res.status(404).json({ message: 'OrderItem not found' });
            }
            res.status(200).json(updatedOrderItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Xóa OrderItem
    async delete(req, res) {
        try {
            const deletedOrderItem = await OrderItem.findByIdAndDelete(req.params.id);
            if (!deletedOrderItem) {
                return res.status(404).json({ message: 'OrderItem not found' });
            }
            res.status(200).json({ message: 'OrderItem deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new OrderItemController();
