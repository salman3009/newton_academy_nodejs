const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const transactionRoute = require('./routes/transaction');

app.use((req,res,next)=>{
    res.setHeader('Access-control-Allow-Headers','authorization');
    res.setHeader('Access-control-Allow-Methods','GET,DELETE,POST');
    res.setHeader('Access-contorl-Allow-Origin',"*");
    next();
})
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/newton_academy").then(()=>{
    console.log('connected');
}).catch((err)=>{
     console.log(err);
})

app.use('/api/user',userRoute);
app.use('/api/transaction',transactionRoute)



app.listen(8080,()=>{
    console.log("server is running on 8080");
})