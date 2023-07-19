const express = require('express');
const app = express();

app.get('/', (req, res) =>{
       let a = 3 + 4;
       let b = 4 + 4;
       let result = a + b;
       res.send("welcome");
} )

app.listen(7200, () => console.info('Example app listening on port 3000!'));
