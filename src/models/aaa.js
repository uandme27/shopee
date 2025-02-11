const mongoose = require('mongoose');
const User = require('../models/UserModel');  // Đảm bảo đường dẫn đúng với cấu trúc dự án của bạn

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    seedUsers();  // Gọi hàm tạo dữ liệu
}).catch(err => console.error(err));

// Tạo dữ liệu người dùng
async function seedUsers() {
    try {
        const users = [
            {
                email: 'user1@example.com',
                phoneNumber: '0901234567',
                password: 'password123'
            },
            {
                email: 'user2@example.com',
                phoneNumber: '0912345678',
                password: 'password456'
            },
            {
                email: 'user3@example.com',
                phoneNumber: '0923456789',
                password: 'password789'
            }
        ];

        await User.insertMany(users);
        console.log('Users added successfully!');
    } catch (error) {
        console.error('Error adding users:', error);
    } finally {
        mongoose.connection.close();
    }
}
