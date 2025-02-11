const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    product_id: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }]
    },
    status: {
        type: String,
        required: true,
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema)