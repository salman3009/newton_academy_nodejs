const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:[4,'minimum should be 4']
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
    later:{
      type:[]
    }
})

module.exports = mongoose.model('user',userSchema);

