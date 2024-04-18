const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName:{
        type:String
    },
    price:{
        type:Number
    },
    user:{
        type:String,
        required:true
    },
    comments:{
        type:[String]
    }
})

module.exports = mongoose.model('product',productSchema);