const {User} = require('../Database/Database.js');
const { Router } = require("express");
const usernameDuplicacy = require("../Middlewares/UsernameDuplicacy.js");

const signupRoute = Router();

signupRoute.post('/signup',usernameDuplicacy,(req,res) => {
    const gmail = req.body.gmail;
    const username = req.body.username;
    const password = req.body.password;
    
    const user = new User({
        gmail : gmail,
        username : username,
        password : password,
    })
    user.save();

    res.json({
        msg : 'user created succeffully',
    })

});

module.exports = signupRoute;