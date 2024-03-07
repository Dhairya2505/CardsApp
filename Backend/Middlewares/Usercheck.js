const { User } = require("../Database/Database.js");

async function usercheck(req,res,next){
    const username = req.body.username;
    const password = req.body.password;
    
    const user = await User.findOne({
        username : username,
        password : password
    });

    if(user){
        next();
    }
    else{
        res.status(401).json({
            msg : '*Wrong username or password',
        })
    }

}

module.exports = usercheck;