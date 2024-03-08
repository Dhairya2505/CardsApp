const { Router } = require('express'); 
const jwt = require('jsonwebtoken');
const tokenVerifymiddleware = require('../Middlewares/tokenVerifymiddleware.js');
const { User, Details } = require('../Database/Database.js');

const secretKey = "Dhairya@123456";

const getDetailsRoute = Router();

getDetailsRoute.get('/api/getDetails',tokenVerifymiddleware, async (req,res) => {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(' ')[1];

    const user = jwt.verify(token,secretKey);
    
    const username = user.username;
    const user1 = await User.findOne({username : username});
    const id = user1._id;

    const details = await Details.findOne({id : id});

    const name = details.name;
    const email = details.email;
    const gender = details.gender;
    const mobile = details.mobile;
    const address = details.address;
    const education = details.education;
    const title1 = details.title1;
    const desc1 = details.desc1;
    const link1 = details.link1;
    const title2 = details.title2;
    const desc2 = details.desc2;
    const link2 = details.link2;
    
    res.json({
        name : name,
        email : email,
        gender : gender,
        mobile : mobile,
        address : address,
        education : education,
        title1 : title1,
        desc1 : desc1,
        link1 : link1,
        title2 : title2,
        desc2 : desc2,
        link2 : link2
    })
})

module.exports = getDetailsRoute;