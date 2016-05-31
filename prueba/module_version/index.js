/**
 * Created by Alicia on 19/04/2016.
 */
"use strict";

// Load libraries
var fs = require('fs');
var path = require('path');

function moduleVersion(moduleName, callback) {
    //var file = './node_modules/' + moduleName + '/package.json';
    var file = path.join('node_modules', moduleName, 'package.json');

    console.log(file);

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
        callback(null, packageJson.version);
    });
}


// Call to function
moduleVersion('chance', function (err, version) {
    if (err){
        console.log('Error on file format', err);
        return;
    }
    
    console.log('Chance version is', version);
})