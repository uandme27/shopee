const Category = require('../models/categoryModel')

class CategoryController {
    async getCategory(req, res) {
        try {
            await Category.find()
                .then(category => res.json(category))
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // async addProduct(req, res) {
    //     try {
    //         const { name } = req.body
    //         console.log(req.body)
    //         const checkName = await Product.findOne({ name })
    //         if (checkName)
    //             return res.status(400).json({
    //                 message: "Tên sản phẩm đã tồn tại."
    //             })
    //         const product = await Product.create(req.body)
    //         res.status(200).json({
    //             message: "Thêm sản phẩm thành công",
    //             data: product,
    //         });
    //     } catch (error) {
    //         console.error(error)
    //         res.status(500).json(error)
    //     }
    // }
}

module.exports = new CategoryController