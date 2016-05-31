/**
 * Created by Alicia on 19/04/2016.
 */
"use strict";

function Person(name) {
    this.name = name;

}

var person1 = new Person('Neo');

// Assign method to all Person
// It applies to Person already created and also new Person instances
Person.prototype.salute = function () {
    console.log("Hi, my name is " + this.name);
};

person1.salute();

// Inheritance of Person

function Agent(name) {
    // Execute Person constructor on myself
    Person.call(this, name);

}

Agent.prototype = new Person('I\'m a prototype');

// Create agents who inherate from Person
var agent = new Agent('Smith');

agent.salute();

console.log(
    Object.getPrototypeOf(agent),
    agent instanceof Agent,
    agent instanceof Person,
    agent instanceof Object
);