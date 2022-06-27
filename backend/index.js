const express = require('express');
const User = require('./models/User.js')
require('./database/config');
const jwt = require('jsonwebtoken')

const app = express();
const cors = require('cors');

app.use(cors());
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
        res.send(result);
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

    if (user) {
        const token = jwt.sign({
            firstName: user.firstName,
            email: user.email
        }, 'outnetsecretadmin123')
        return res.json({ status: 'ok', user: token })
    }
    else {
        return res.json({ status: 'error', user: 'false' })
    }

})





app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})