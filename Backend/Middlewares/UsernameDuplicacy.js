const User = require("./../Database/Database");

async function usernameDuplicacy(req,res,next){
    const username = req.body.username;
    const gmail = req.body.gmail;
    

    const user1 = await User.findOne({
        gmail : gmail,
        username : username,
    });
    
    const user2 = await User.findOne({
        gmail : gmail,
    });

    const user3 = await User.findOne({
        username : username,
    });

    if(user1){
        res.status(422).json({
            msg : 'User already exists',
        })
    }
    else if(user2){
        res.status(422).json({
            msg : 'Gmail exits',
        })
    }
    else if(user3){
        res.status(422).json({
            msg : 'Username taken',
        })
    }
    else{
        next();
    }
}

module.exports = usernameDuplicacy;