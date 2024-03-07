const jwt = require('jsonwebtoken');

const secretKey = "Dhairya@123456";

function tokenVerifymiddleware(req,res,next){
    const bearerToken = req.headers.authorization;
    const token = bearerToken?.split(' ')[1];
    try {
        const user = jwt.verify(token,secretKey);
        if(user.type === 'user'){
            next();
        }
        else{
            res.status(401).json({
                msg : false,
            })
        }
    } catch (error) {
        console.log('not a user');
        res.status(401).json({
            msg : false,
        })
    }
}

module.exports = tokenVerifymiddleware;