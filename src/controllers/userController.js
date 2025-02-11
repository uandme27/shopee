const User = require('../models/userModel')
// const { verifyToken } = require("../config/verifyToken");
// const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");



class userController {
    async getUser(req, res) {
        try {
            await User.find()
                .then(user => res.json(
                    {
                        message: "thành công",
                        data: user
                    }
                ))
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async createUser(req, res) {
        try {
            console.log('bat dau')
            const { email } = req.body;
            const findUser = await User.findOne({ email });
            if (findUser) {
                return res.json({ message: "email đã tồn tại" })
            }
            const newUser = await User.create(req.body);
            res.json({
                message: 'Đăng ký thành công',
                data: newUser
            });
        } catch (error) {
            res.status(500).json(error)
        }
    };

    async login(req, res) {
        try {
            const { email, password } = req.body;
            console.log(email);

            const user = await User.findOne({ email: email });
            if (!user) {
                console.log("lỗi 1")
                return res.status(401).json({
                    message: "Người dùng không tồn tại"
                });
            }
            if (password != user.password) {
                console.log("lỗi 2")
                return res.status(401).json({
                    message: "Mật khẩu không chính xác"
                });
            }
            console.log("lỗi 3")
            res.json({
                message: "Đăng nhập thành công",
                data: user
            });
        } catch (error) {
            res.status(500).json({
                message: "Đã xảy ra lỗi trong quá trình đăng nhập",
            });
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

module.exports = new userController