const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Jewellery = require('./jewellery');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Jewellery'
        }
    ]

});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);