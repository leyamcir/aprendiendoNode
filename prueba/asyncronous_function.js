/**
 * Created by Alicia on 18/04/2016.
 */
// For crashing on undefined
"use strict";

console.log('begin');

function writeAfter2Secs(n, callback) {
    setTimeout(function () {
        console.log('iteration '+ n);
        callback();
    }, 2000); //time in miliseconds
};
/*
writeAfter2Secs(text, function () {
    writeAfter2Secs("text2", function () {
        console.log("real end");
    });
});
*/
/*
function serie (n, fn, callbackFin){
    if(n == 0){
        callbackFin();
        return;
    }

    n--;
    fn(n, function () {
        serie(n, fn, callbackFin);
    })
}
*/

function serie (arr, fn, callbackFin){
    if(arr.length == 0){
        callbackFin();
        return;
    }

    fn(arr.shift(), function () {
        serie(arr, fn, callbackFin);
    })
}

serie([1,2,3,4,5], writeAfter2Secs, function () {
    console.log("real end");
});

console.log("end code");

