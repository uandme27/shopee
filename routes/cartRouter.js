const express = require("express");
const router = express.Router();
const CartController = require('../controllers/cartController')

router.get('/', CartController.getCart);
router.get('/:userId', CartController.getCartByUser);
router.put('/add/:userId', CartController.addItemToCart);
router.put('/update/:userId', CartController.updateCart);


module.exports = router;
