const express = require('express');
const User = require('./models/User.js');
const Product = require('./models/Products.js')
const Cart = require('./models/Cart.js')
require('./database/config');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authenticate = require('./middleware/authenticate')
const ObjectId = require('mongodb').ObjectId

const app = express();
const cors = require('cors');

app.use(cors());
app.use(cors({
    origin: true,
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json());


const port = 80;



app.post('/api/register', async (req, res) => {
    try {
        const user = new User({
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
        const cart = new Cart({
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

    // const temp = await user.generateAuthToken();
    // res.cookie("testToken", temp,{
    //     expires: new Date(Date.now() + 29800000),
    //     httpOnly:true    
    // })



    if (!user) {
        return res.status(400).json({ error: 'User Not Found' })
    }
    else {

        const token = await user.generateAuthToken();

        res.cookie('jwtoken', token, {
            expires: new Date(Date.now() + 2980000),
            httpOnly: true
        });

        return res.json({ status: 'ok', user: token })
    }

})

app.get('/dashboard', authenticate, (req, res) => {
    res.send(req.rootUser)
})

app.get('/dashboard/user-details', authenticate, (req, res) => {
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
            await cart.updateOne({ $push: { cart: prod } })
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

app.put('/api/delprod/:e', async (req, res) => {
    const token = req.cookies.jwtoken;
    const prodID = new ObjectId(req.params.e);
    if (token) {
        const verifyToken = jwt.verify(token, 'outnetsecretadmin123')
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
        await Cart.updateOne({ userID: rootUser._id }, { $pull: { cart: { _id: prodID } } })
        console.log(prodID)

    }
})

app.put('/api/updatePassword', async (req, res) => {
    const token = req.cookies.jwtoken
    const password = req.body.newPassword
    console.log(token)
    try {
        if(token){
        const verifyToken = jwt.verify(token, 'outnetsecretadmin123')
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
        await rootUser.updateOne({ $set: { password } });
        }
    } catch (err) {
        console.log(err.message)
    }
})

app.delete('/api/delete-account', async (req, res) =>{
    const token = req.cookies.jwtoken;
    try{
        if (token) {
            const verifyToken = jwt.verify(token, 'outnetsecretadmin123')
            const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token})
            await rootUser.deleteOne();
        }
    }catch(err) {
        console.log(err.message)
    }
    
})


app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
})


