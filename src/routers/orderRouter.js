const express = require("express");
const router = express.Router();
const OrderController = require('../controllers/orderController')


router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getOrderById);
router.post('/', OrderController.createOrder);
router.put('/', OrderController.updateOrder);
router.delete('/', OrderController.deleteOrder);


module.exports = router;
