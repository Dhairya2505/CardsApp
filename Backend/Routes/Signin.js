const { Router } = require("express");
const usercheck = require('./../Middlewares/Usercheck.js');
const jwt = require('jsonwebtoken');

const secretKey = "Dhairya@`123456"

const signinRoute = Router();

signinRoute.post('/signin',usercheck,(req,res) => {
    try {
        const username = req.body.username;
        const type = "user"; 
        const token = jwt.sign({
            username : username,
            type : type
        },secretKey);
        
        res.status(200).json({
            token : `Bearer ${token}`,
        })
    } catch (error) {
        res.status(404).json({
            msg : '*Something went wrong',
        })
    }
});

module.exports = signinRoute;