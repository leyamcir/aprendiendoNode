/**
 * Created by Alicia on 25/04/2016.
 */
"use strict";
var mongoose = require('mongoose');

// Create schema
var agentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number
});

// Method static
agentSchema.statics.list = function (filter, start, limit, sort, callback) {
    var query = Agent.find(filter); // without .exec(), still  not executed

    // variables for pagination
    query.skip(start);
    query.limit(limit);

    // variable for sort
    query.sort(sort);

    // query.select('name age'); // for getting only selected fields
    
    return query.exec(callback); // will be called with err and rows
    // exec will return a promise !!
};


// playing with promise
var fs = require('fs');

agentSchema.statics.listPromise = function () {
    return new Promise(function (resolve, reject) {
        fs.readFile(__dirname + '/../agentsMock.json', 'utf-8', function (err, data) { // __dirname == actual directory
            if (err) {
                return reject(err);
            }
            return resolve(JSON.parse(data));
        });
    });
};

// assign schema to model

var Agent = mongoose.model('Agent', agentSchema);

// no need to export this, later we'll call mongoose of 'Agent'