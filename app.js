const express = require('express');
var tiendaTendero = require('./routes/tiendaTendero.js');

var app = express();

app.use("/tiendaTendero", tiendaTendero);

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});