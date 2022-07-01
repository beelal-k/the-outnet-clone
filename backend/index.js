const express = require('express');
const User = require('./models/User.js');
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
            expires: new Date(Date.now() + 5000),
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

app.get('/', authenticate, (req,res) =>{
    res.send(req.rootUser)
})



app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
})

