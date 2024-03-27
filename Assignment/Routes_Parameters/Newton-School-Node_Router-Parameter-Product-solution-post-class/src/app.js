const express = require('express');
const app = express();

app.get('/product/:productId', (req, res) => {
  req.params; // { productId: '42'}
  res.status(200).json(req.params);
});

module.exports = app;
