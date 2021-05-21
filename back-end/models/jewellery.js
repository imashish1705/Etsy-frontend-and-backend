const mongoose = require('mongoose');
const Review = require('./review');

const productSchema = new mongoose.Schema({
    img: {
        type: String,
    },
    price: {
        type: Number,
        min:0
    },
    desc: {
        type: String,
        minLength:2
    },
    name: {
        type: String,
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }  
    ]

})

const Jewellery = mongoose.model('Jewellery', productSchema);

module.exports = Jewellery;