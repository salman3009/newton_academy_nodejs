const express = require('express');
const router = express.Router();
const {createProduct,getProduct,getProductById,updateProductById,deleteProductById} = require('../controllers/productController');
const isLogged = require('../middlewares/isLogged');

router.post('/',isLogged,createProduct);
router.get('/',getProduct);
router.get('/:id',getProductById);
router.patch('/:id',updateProductById);
router.delete('/:id',isLogged,deleteProductById);

module.exports = router;