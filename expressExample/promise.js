/**
 * Created by Alicia on 29/04/2016.
 */
"use strict";

// Return promise which will be completed when certain time passes
function msToWait(miliseconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            //resolve('ok');
            reject('fuck');
        }, miliseconds);
    });
}

var promise = msToWait(1000);

// Enable ES6 to dismiss errors
promise.then((value) => {
    console.log('Resolved:', value);
}).catch((err) => {
    console.log('Error', err);
});

console.log('end code');