const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cart: { type: Array, required: false },
    wishlist: { type: Array, required: false },
    promo: { type: Boolean, required: true }

})

module.exports = mongoose.model('users', userSchema);