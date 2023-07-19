const {Schema,model} = require('mongoose');

const UserSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['employee','admin','superadmin'],
        default:'employee'
    }
})

module.exports = model('user',UserSchema)