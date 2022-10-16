const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    cart: [{type: Object, required: false}]
 
})

module.exports =  mongoose.model('carts', cartSchema)