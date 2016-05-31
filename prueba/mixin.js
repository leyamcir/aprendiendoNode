/**
 * Created by Alicia on 19/04/2016.
 */
"use strict";

var Person = function (name, age) {
    this.name = name;
    this.age = age;
};

var trinity = new Person('Trinity', 44);

var matrixMixin = {
    fly: function () {
        console.log(this.name + ' flies');
    },
    dodgeBullets: function () {
        console.log(this.name + ' dodge bullets')
    }
};

var anotherMixin = {
    
}

// Extend Person prototype with mixin
Person.prototype = Object.assign(Person.prototype, matrixMixin);

var neo = new Person('Thomas', 33);

console.log(neo);

neo.fly();
neo.dodgeBullets();

console.log(trinity);

trinity.fly();
trinity.dodgeBullets();