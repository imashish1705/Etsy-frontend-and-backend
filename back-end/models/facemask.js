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
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }  
    ]

})

const Facemask = mongoose.model('Facemask', productSchema);

module.exports = Facemask;