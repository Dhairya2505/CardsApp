const { Router } = require('express');
const tokenVerifymiddleware  = require('./../Middlewares/tokenVerifymiddleware.js');
const { User,Details } = require('../Database/Database.js');
const jwt = require('jsonwebtoken');
const secretKey = "Dhairya@123456";

const apiDetailsRoute = Router();

apiDetailsRoute.post('/api/details',tokenVerifymiddleware, async (req,res) => {
    const name = req.body.name;
    const mobile = req.body.mobile;
    const gender = req.body.gender;
    const address = req.body.address;
    const education = req.body.education;
    const title1 = req.body.title1;
    const title2 = req.body.title2;
    const desc1 = req.body.desc1;
    const desc2 = req.body.desc2;
    const link1 = req.body.link1;
    const link2 = req.body.link2;

    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(' ')[1]; 
    try {
        const user = jwt.verify(token,secretKey);
        const username = user.username;
        const type = user.type;
        
        if(type === "user"){
            const user1 = await User.findOne({username : username});
            const gmail = user1.gmail;
            const id = (user1._id).toString();
            const user2 = await Details.findOne({id : id});
            
            if(!user2){
                const details = new Details({
                    id : id,
                    name : name,
                    email : gmail,
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
    
                details.save();
    
                res.json({
                    msg : "details saved successfully",
                })
            }
            else{
                res.json({
                    msg : "details saved successfully",
                })
            }
        }
        else{
            res.status(401).json({
                msg : 'unauthorized',
            })    
        }


    } catch (error) {
        res.status(401).json({
            msg : 'unauthorized',
        })
    }

})

module.exports = apiDetailsRoute;