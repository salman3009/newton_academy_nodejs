const express = require('express');
const app = express();

app.get('/user/:userId', (req, res) => {
  req.params; // { userId: '42', bookId: '101' }
  res.status(200).json(req.params);
});

module.exports = app;
