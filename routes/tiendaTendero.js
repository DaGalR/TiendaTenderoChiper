const express = require('express');
const { Client } = require('pg');
const router = express.Router();

const connectionString = 'postgres://programadores:programadores@chiper.ctjcfyfpccwk.us-east-1.rds.amazonaws.com:5432/chiper';
const client = new Client({
    connectionString: connectionString
});
client.connect();

router.get('/:id/aiuda/:nombre',function(req, res, next){
    client.query('UPDATE tienda_tienda SET duenio = \'' +req.params.nombre + '\' WHERE id = ' + req.params.id, function(err,result){
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});


router.get('/', function (req, res, next) {
   client.query('SELECT * FROM tienda_tienda', function (err, result) {
       if (err) {
           console.log(err);
           res.status(400).send(err);
       }
       res.status(200).send(result.rows);
   });
});

router.get('/:id', function (req, res, next) {
    client.query('SELECT id FROM tienda_tienda WHERE duenio = \'' + req.params.id + '\'', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
 });

 router.get('/info/:id', function (req, res, next) {
    client.query('SELECT duenio FROM tienda_tienda WHERE id = ' + req.params.id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
 });

 router.delete('/:id', function (req, res) {
    client.query('UPDATE tienda_tienda SET duenio = NULL WHERE id = ' + req.params.id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
 });

//router.get('/', function (req, res, next) {
//    client.query('SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\' ORDER BY table_name', function (err, result) {
//        if (err) {
//            console.log(err);
//           res.status(400).send(err);
//        }
//        res.status(200).send(result.rows);
//   });
//});

module.exports = router;