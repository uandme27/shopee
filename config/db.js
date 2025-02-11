const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/shopee";

mongoose
    .connect(db)
    .then(() => {
        console.log("Kết nối MongoDB thành công...");
    })
    .catch((err) => {
        console.error(`Lỗi kết nối MongoDB: ${err}`);
    });

module.exports = mongoose.connection;
