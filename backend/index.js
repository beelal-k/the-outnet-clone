const express = require('express');
const User = require('./models/User.js');
const Product = require('./models/Products.js')
const Cart = require('./models/Cart.js')
require('./database/config');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authenticate = require('./middleware/authenticate')

const app = express();
const cors = require('cors');

app.use(cors());
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(cookieParser())
app.use(express.json());


const port = 80;



app.post('/api/register', async (req, res) => {
    try {
        const user = await new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            cart: [],
            wishlist: [],
            promo: req.body.promo

        });
        const result = await user.save();
        res.json({ status: 'User Registered!' })
        console.log(result);
        const cart = await new Cart({
            userID: user._id,
            cart: []
        });
        const finalCart = await cart.save();
        console.log(finalCart);
    }
    catch (err) {
        res.json({ status: 'error', error: 'Some Error IDK' })
    }


})


app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    let token;

    if (user) {

        token = await user.generateAuthToken();

        res.cookie('jwtoken', token, {
            expires: new Date(Date.now() + 2980000),
            httpOnly: true
        });

        return res.json({ status: 'ok', user: token })
    }
    else {
        return res.status(400).json({ error: 'User Not Found' })
    }

})

app.get('/dashboard', authenticate, (req, res) => {
    res.send(req.rootUser)
})

app.get('/browse', async (req, res) => {
    const product = await Product.find();
    res.send(product)

})

app.get('/', (req, res) => {
    res.send(req.rootUser)
})


app.get('/api/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('User Logged Out!');
    console.log('Cookie Cleared!')

})

app.get('/api/header', async (req, res) => {
    const token = req.cookies.jwtoken;
    if (token) {
        const verifyToken = jwt.verify(token, 'outnetsecretadmin123')
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })

        if (!rootUser) {
            throw error('User not found')
        }
        // req.rootUser = rootUser;
        res.send(rootUser);
    }

})

app.get('/api/cart', async (req, res) => {
    const token = req.cookies.jwtoken;
    if (token) {
        const verifyToken = jwt.verify(token, 'outnetsecretadmin123')
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
        res.status(200);

        const userID = rootUser._id;
        console.log(userID)

        const cart = await Cart.findOne({ userID: userID })
        res.send(cart.cart)

        if (!rootUser) {
            res.status(400).json({ error: "Please Login" });
        }
    }

})

// let prodID;

// app.post('/api/getProdID', async (req, res) => {
//     prodID = req.body._id;
//     console.log(prodID);
// })

app.put('/api/atc/:_id', async (req, res) => {
    const token = req.cookies.jwtoken;
    const prodID = req.params._id;
    console.log('This is product ID:' + prodID);
    console.log(token)
    if (token) {
        const verifyToken = jwt.verify(token, 'outnetsecretadmin123')
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
        const cart = await Cart.findOne({ userID: rootUser._id });
        const prod = await Product.findOne({ _id: prodID })
        if (prod) {
            const addcart = await cart.updateOne({ $push: { cart: prod } })
            const result = await cart.save()
            res.send(result);
            res.status(200)

            if (!rootUser) {
                // window.alert('Please login to add item to cart')
                throw error('Please login to add item to cart')
            }
        }

    }
})

app.delete('/api/delprod/:e', async (req, res) => {
    const token = req.cookies.jwtoken;
    const prodID = req.params.e;
    if (token) {
        console.log(prodID)
        const verifyToken = jwt.verify(token, 'outnetsecretadmin123')
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
        const user = await Cart.find({ $and: [{ userID: rootUser._id }, { cart: { _id: prodID } }] })
        console.log(user)
        // const cart = user.find({ 'cart': [{ _id: prodID }] });
        // console.log(cart)
        // const cart = await Cart.findOne({ cart: { _id: prodID } })

        //LOOK INTO PROJECTION IN MONGOOSE TO FIX THIS PROBLEM


        //CANNOT REMOVE OBJECT FROM ARRAY
        // const cart = await Cart.findOneAndUpdate({ userID: rootUser._id }, { $pull: { "cart": [{ "_id": prodID }] } }, {new: true})
        // const result = await cart.save();
        // res.send(result)
    }
})

// const deleteItem = await cart.updateOne({ $pull: { "cart": { _id : prodID } } })
// if (res.status(200)) {
//     console.log('Item added!')
// }


app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
})


