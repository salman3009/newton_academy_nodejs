const express = require('express');
const router = express.Router();
const {verifyAuthToken} = require('../middlewares/user');
const {createTransaction,listTransaction,deleteTransaction} = require('../controllers/transaction');
const grantAccessTo = require("../middlewares/grantAccessTo");

router.post('/create',verifyAuthToken,createTransaction);
router.get('/list',verifyAuthToken,listTransaction);
router.delete('/delete/:id',verifyAuthToken,grantAccessTo(["employee", "admin", "superadmin"]),deleteTransaction);



module.exports = router;