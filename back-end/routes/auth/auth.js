const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const passport = require('passport');
//const signup = require("../../../front-end/src/LandingPage/Header/Register");

// Get signup page
router.get('/register', (req, res) => {
    //res.render('auth/signup');
})



// Register the new user
router.post('/register', async(req, res) => {
    
    const user = {
        username: req.body.username,
        email:req.body.email
    }

    const newUser=await User.register(user, req.body.password);

    res.redirect('/facemask');
})


// get login page

router.get('/login', (req, res) => {
    
    //res.render('auth/login');
})


// Login the existing user
router.post('/login', passport.authenticate('local', { failureRedirect: '/jewellery' }), (req, res) => {
    res.redirect('/');
})


// Logout the user from the current session
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;

