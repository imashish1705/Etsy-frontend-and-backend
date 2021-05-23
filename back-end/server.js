const express = require('express');
const app = express();
const mongoose = require('mongoose');
const facemask = require('./seedEveryDayFind');
const seedJewellery = require("./seedJewellery");
const productRoutes = require('./routes/product/product');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const authRoutes = require('./routes/auth/auth');
const reviewRoutes = require("./routes/reviews/reviews");
const cartRoutes = require('./routes/cart/cart');
const cors = require("cors");
// mongodb+srv://test:123@cluster0.ayqsm.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/Etsy1',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
        console.log("DB Connection Failed");
    });
    
    app.use(express.urlencoded({ extended: true }));
    
    app.use(session({
        secret: 'thisisnotagoodsecret',
        resave: false,
        saveUninitialized: true
    }))

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(User.authenticate()));
    
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    app.use((req, res, next) => {
        res.locals.currentUser = req.user;
        next();
    })


app.use(express.json());
app.use(cors());

//facemask();
//seedJewellery();

app.use(productRoutes);
app.use(authRoutes);
app.use(reviewRoutes);
app.use(cartRoutes);


app.listen(4000, () => {
    console.log("Server Running on Port 4000");
})