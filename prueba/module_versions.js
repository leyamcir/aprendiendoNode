/**
 * Created by Alicia on 22/04/2016.
 */
"use strict";

// Load libraries
var fs = require('fs');
var path = require('path');

function moduleVersion(moduleName, callback) {
    //var file = './node_modules/' + moduleName + '/package.json';
    var file = path.join('node_modules', moduleName, 'package.json');

    //console.log(file);

    //var path = 'a'; // Hoisting would obtain an error

    // Read package.json
    fs.readFile(file, (err, data) => { // arrow function
        if(err){
            callback(err);
            return;
        }

        // Parse file
        try {
            var packageJson = JSON.parse(data);
        }catch (e){
            callback(e);
            return;
        }

        // Get version
        callback(null, moduleName, packageJson.version);
    });
}

function getModuleNames(callback){
    var file = path.join('package.json');
    console.log(file);

    // Read package.json
    fs.readFile(file, (err, data) => { // arrow function
        if(err){
            callback(err);
            return;
        }

        // Parse file
        try {
            var packageJson = JSON.parse(data);
        }catch (e){
            callback(e);
            return;
        }

        // Get modules
        callback(null, packageJson.dependencies);
    });
}

var moduleVersionCallback = function (err, module, version) {
    if (err){
        console.log('Error on file format', err);
        return;
    }

    console.log(module, 'version is', version);
};

// Call to function
moduleVersion('chance', moduleVersionCallback);

getModuleNames(function (err, dependencies) {
    if (err){
        console.log('Error on file format', err);
        return;
    }

    //console.log('Dependencies are:', dependencies);

    for(var dependency in dependencies){
        //console.log(dependency+": "+dependencies[dependency]);
        //console.log(dependency);
        moduleVersion(dependency, moduleVersionCallback);
    }

});