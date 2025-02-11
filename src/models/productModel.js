const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
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
    price: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    remaining: {
        type: Number,
        required: true
    },
    category: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }]
    },
});

module.exports = mongoose.model('Product', productSchema);

