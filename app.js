// JavaScript source code
const express = require('express');
var tiendaTendero = require('./routes/tiendaTendero.js');
var app = express();
app.use("/", tiendaTendero);
app.listen(5000, () => console.log('Server running on port 5000'));