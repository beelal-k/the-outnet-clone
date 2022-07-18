const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    reviews: { type: Array, required: false },
    image: { type: String, required: true },

})



module.exports = mongoose.model('products', productSchema);

