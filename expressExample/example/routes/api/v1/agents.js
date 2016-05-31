/**
 * Created by Alicia on 25/04/2016.
 */
"use strict";

var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var Agent = mongoose.model('Agent');

// auth
var basicAuth = require('../../../lib/basicAuth');
var jwtAuth = require('../../../lib/jwtAuth');

//router.use(jwtAuth());

//router.use(basicAuth('admin', '1234'));

//router.get('/', basicAuth('admin', '123'),  function (req, res) {

router.get('/', function (req, res) {
    var name = req.query.name;
    var start = parseInt(req.query.start) || 0;
    var limit = parseInt(req.query.limit) || null;
    var sort = req.query.sort || null;

    // This code better in model
    var filters = {};
    /*
    if (typeof name !== 'undefined'){
        filters.name = name;
    }*/

    if (name !== undefined){
        filters.name = name;
    }

/*
    // Create query
    var query = Agent.find(filters);

    // Ordered by name descendant
    query.sort({name: -1});

    // Execute query
    query.exec(function (err, agents) {
        if (err){
            next(err);
            return;
        }
        res.json({success: true, rows: agents});
    });
*/

    Agent.list(filters, start, limit, sort, function (err, rows) {
        if (err){
            return res.json({
                success: false,
                error: err
            });
            //return;
        }

        res.json({
            success: true,
            rows: rows
        });
    });
});

// playing with promises

router.get('/promise', function (req, res) {
    Agent.listPromise()
        .then(function (data) {
            res.json({
                success: true,
                rows: data
            });
        })
        .catch(function (err) {
            res.json({
                success: false,
                error: err
            });
        });
});

router.post('/', function (req, res, next) {

    var agent = new Agent(req.body);

    var errors = agent.validateSync();
    if (errors){
        console.log('errors', errors);
        next(new Error('There were errors on validation'));
        return;
    }


    //console.log(agent);
    agent.save(function (err, saved) {
        if(err){
            next(err);
            return;
        }
        res.json({success: true, saved: saved});
    })
});

module.exports = router;