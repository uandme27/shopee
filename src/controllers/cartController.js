const Cart = require('../models/cartModel');

class CartController {
    async getCart(req, res) {
        try {
            const userId = req.params.userId;
            const cart = await Cart.findOne({ user: userId }).populate('items.product');
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
        }
    }

    async getCartByUser(req, res) {
        try {
            const userId = req.params.userId;
            const cart = await Cart.findOne({ user: userId }).populate('items.product');
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
        }
    }

    async addItemToCart(req, res) {
        try {
            const userId = req.params.userId;
            const { productId, quantity } = req.body;

            let cart = await Cart.findOne({ user: userId });
            if (!cart) {
                cart = new Cart({ user: userId, items: [] });
            }

            const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
            if (itemIndex !== -1) {
                cart.items[itemIndex].quantity += quantity;
                await cart.save();
                return res.status(200).json({ message: `+${quantity}` });
            }

            cart.items.push({ product: productId, quantity: 1 });
            await cart.save();
            res.status(200).json({ message: 'Thêm sản phẩm vào giỏ hàng thành công', data: cart });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error', error });
        }
    }

    async updateCart(req, res) {
        try {
            const userId = req.params.userId;
            const { productId, quantity } = req.body;

            let cart = await Cart.findOne({ user: userId });
            if (!cart) {
                cart = new Cart({ user: userId, items: [] });
            }

            const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
            if (itemIndex !== -1) {
                cart.items[itemIndex].quantity = quantity;
                console.log(cart)
                await cart.save();
                return res.status(200).json({ message: quantity });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error', error });
        }
    }




}

module.exports = new CartController();
