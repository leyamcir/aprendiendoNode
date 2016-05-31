/**
 * Created by Alicia on 29/04/2016.
 */
"use strict";

var request = require('request');

// make options object
var options = {
    url: 'http://localhost:3000/api/v1/agents',
    json: true
    // headers: {'User-Agent': '...'},
};

// make call
request(options, function (err, response, body) {
    if (err || response.statusCode >= 400){
        console.log('Error', response.statusCode, err);
        return;
    } 
    console.log('list', body);
});