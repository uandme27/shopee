const mongoose = require("mongoose");

// Kết nối tới MongoDB
mongoose.connect("mongodb://localhost:27017/shopee", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Kết nối MongoDB thành công!"))
.catch(err => console.error("Kết nối MongoDB thất bại:", err));

// Định nghĩa schema
const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
});

// Tạo model từ schema
const Shop = mongoose.model("Shop", shopSchema);

// Tạo dữ liệu mới
const newShop = new Shop({
    name: "Zalomini Store",
    image: "https://example.com/image.jpg",
    description: "Một cửa hàng chuyên về các sản phẩm Zalomini.",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    phone: "0123456789",
    email: "contact@zalomini.com"
});

// Lưu dữ liệu vào MongoDB
newShop.save()
    .then(() => console.log("Dữ liệu đã được lưu thành công!"))
    .catch(err => console.error("Lỗi khi lưu dữ liệu:", err));
