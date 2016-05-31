/**
 * Created by Alicia on 19/04/2016.
 */
"use strict";

function createClosure(name, newAge) {
    var age = newAge || 20;
    return function () {
        console.log(name+',', age, 'years');
    }
}

var aClosure = createClosure('Juan', 15);
var anotherClosure = createClosure('Alberto');

aClosure();
anotherClosure();