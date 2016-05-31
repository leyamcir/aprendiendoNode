/**
 * Created by Alicia on 21/04/2016.
 */
"use strict";

var express = require('express');

var router = express.Router();
/*
var auth = function (req, res, next) {
   if(req.query.key != '123'){
       res.status(401).send('Unauthorized');
       return; // DON'T FORGET
   }
    next();
};
*/

// Closure
var auth = function (key) {
    return function (req, res, next) {
        if(req.query.key != key){
            res.status(401).send('Unauthorized');
            return; // DON'T FORGET
        }
        next();
    };
};
router.get('/', auth(123), function (req, res) {
    res.send('Home');
});

// identificator is optional
router.get('/:identificator?', function (req, res) { // next no needed
    console.log('req.params', req.params);
    console.log('req.query', req.query);
    res.send('Admin zone for user ' + req.params.identificator);
});

router.post('/', function (req, res) {
    console.log('req.body', req.body);
    res.send('Read body');
});

module.exports = router;