const express = require('express');
const { Client } = require('pg');
const router = express.Router();

const connectionString = 'postgres://programadores:programadores@chiper.ctjcfyfpccwk.us-east-1.rds.amazonaws.com:5432/chiper';
const client = new Client({
    connectionString: connectionString
});
client.connect();

router.get('/', function (req, res, next) {
    client.query('SELECT * FROM pedido_pedido', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

module.exports = router;