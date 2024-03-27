const express = require('express');
const app = express();
app.use(express.json());

// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
app.get('/api/get-env', (req, res) => {
    res.status(200).json({ number: process.env.NUMBER });
});

module.exports = app;
