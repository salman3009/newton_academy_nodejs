const jwt = require('jsonwebtoken');

const verifyAuthToken = async(req,res,next)=>{
     try{
      console.log("come token");
        const token = req.header('auth-token');
        console.log(token);
        const verified = jwt.verify(token,'secret-newton-school-token');
        console.log(verified);
        next();
     }catch(err){
         return res.status(400).json({
            message:'authentication failed'
         })
     }
}

module.exports.verifyAuthToken = verifyAuthToken;