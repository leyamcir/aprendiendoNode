/**
 * Created by Alicia on 21/04/2016.
 */

"use strict";

// Create function
var add = function (n1, n2) {
    return n1 + n2;
};

// Export function
//module.exports = add;

// Export object with function as method
module.exports.add = add;

// Equivalent to
//exports.add = add;

// This wouldn't work
// exports = add;