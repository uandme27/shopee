const Product = require('../models/productModel')

class ProductController {
    async getProduct(req, res) {
        try {
            await Product.find()
                .then(products => res.json(products))
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getProductId(req, res) {
        try {
            const { productId } = req.params
            await Product.findById(productId)
                .then(product => res.json(product))
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async addProduct(req, res) {
        try {
            const { name } = req.body
            console.log(req.body)
            const checkName = await Product.findOne({ name })
            if (checkName)
                return res.status(400).json({
                    message: "Tên sản phẩm đã tồn tại."
                })
            const product = await Product.create(req.body)
            res.status(200).json({
                message: "Thêm sản phẩm thành công",
                data: product,
            });
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    }
}

module.exports = new ProductController