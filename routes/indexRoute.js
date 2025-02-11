const express = require("express");
const router = express.Router();
const productRouter = require('./productRouter')
const categoryRouter = require('./categoryRouter')
const userRouter = require('./userRouter')
const cartRouter = require('./cartRouter')
const orderRouter = require('./orderRouter')

router.use('/product', productRouter);
router.use('/category', categoryRouter);
router.use('/user', userRouter);
router.use('/cart', cartRouter);
router.use('/order', orderRouter);
router.use('/', (req, res) => res.json('trangchu'));

module.exports = router;
