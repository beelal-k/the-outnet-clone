const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cart: { type: Array, required: false },
    wishlist: { type: Array, required: false },
    promo: { type: Boolean, required: true },
    tokens: [{ token: { type: String, required: true } }]

})

//token gen
userSchema.methods.generateAuthToken = async function () {
    try {
        let newToken = jwt.sign({ _id: this._id }, 'outnetsecretadmin123')
        this.tokens = this.tokens.concat({token : newToken})
        await this.save();
        return newToken;
    }
    catch (err) {
        console.log(err)
    }

}


module.exports = mongoose.model('users', userSchema);