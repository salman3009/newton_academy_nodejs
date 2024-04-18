const productSchema = require('../models/productSchema');
const userSchema = require('../models/userSchema');

async function createProduct(req, res) {
    try {
        console.log(req.body);
        const product = new productSchema({
            productName: req.body.productName,
            price: req.body.price,
            user: req.userId
        })
        let result = await product.save();
        const Userresult = await userSchema.findById(req.userId);
        console.log(result);
        console.log(Userresult);
        Userresult.later.push(result._id.toString());
        Userresult.save();

        res.status(201).json({
            status: "success",
            result
        })
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}


async function getProductById(req, res) {
    try {
        let result = await productSchema.findById(req.params.id);
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


async function getProduct(req, res) {
    try {
        let result = await productSchema.find();
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



async function updateProductById(req, res) {
    try {
        let result = await productSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
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


async function deleteProductById(req, res) {
    try {
        console.log(req.userId);
        let userDetails = await userSchema.findById(req.userId);
        console.log(userDetails);
        let userIdDetails = userDetails.later.find((obj)=>{
            return obj == req.params.id
        })
        console.log(userIdDetails);
        if(userIdDetails){
            let result = await productSchema.findByIdAndDelete(req.params.id);
            res.status(200).json({
                status: "deleted successfully",
                result
            })
        }
        else{
            res.status(404).json({
                status: "failed",
                message: "you cannot delete this request"
            })
        }
      
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}


module.exports = {
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    getProduct
}