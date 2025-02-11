const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/productController')

router.get('/:productId', ProductController.getProductId);
router.get('/', ProductController.getProduct);
router.post('/', ProductController.addProduct);

module.exports = router;
