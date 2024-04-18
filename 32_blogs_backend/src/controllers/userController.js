const userSchema = require('../models/userSchema');
const jwt = require('jsonwebtoken');

async function registration(req,res) {
    try {
        const user = new userSchema({
            username: req.body.username,
            email: req.body.email,
            password:req.body.password
        })
        let result = await user.save();
        res.status(201).json({
            status:"success",
            result
         })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}

async function login(req,res){
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(404).json({
                status:"failed",
                message:"Please provide email and password"
            })
        }
        else{
            const user = await userSchema.findOne({email:email});
            console.log(user);
            if(!user){
                return res.status(404).json({
                    status:"failed",
                    message:"email is not found"
                })
            }
            if(user && user.password != password){
                return res.status(404).json({
                    status:"failed",
                    message:"password is not match"
                })
            }

            const token = jwt.sign({userId:user._id},"newton_school_secret",{expiresIn:"1h"});
            res.status(201).json({
                status:"success",
                token:token
             })

        }

     
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}


async function userInformation(req, res) {
    try {
        let result = await userSchema.findOne({email:req.params.email});
        res.status(200).json({
            status: "success",
            result
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}

module.exports ={
    registration,
    login,
    userInformation
}