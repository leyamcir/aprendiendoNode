/**
 * Created by Alicia on 29/04/2016.
 */
"use strict";

// Return promise which will be completed when certain time passes
function withRice(serving) {
    return new Promise(function (resolve, reject) {
        resolve(serving + ' rice');
    });
}

function withGarlic(serving) {
    return new Promise(function (resolve, reject) {
        resolve(serving + ' garlic');
    });
}

function withAnything(serving, ingredient) {
    return new Promise(function (resolve, reject) {
        if(ingredient === 'potato'){
            return reject(new Error('no potatoes in paella, please'));
        }
        resolve(serving + ' ' + ingredient);
    });
}

var paella = 'paella wiht';

withRice(paella)
    .then(withGarlic)
    .then(function (serving) {
       return withAnything(serving, 'salt');
    })
    /*
    .then(function (serving) {
        return withAnything(serving, 'potato');
    })
    */
    .then(function (serving) {
        console.log('Dinner is served, bitches:', serving);
    })
    .catch(function (err) {
        console.log('Error', err);
    });

console.log('end code');