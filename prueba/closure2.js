/**
 * Created by Alicia on 19/04/2016.
 */
"use strict";

function createAgent(name) {
    var age = 0;
    return {
        setName: function (newName) {
            name = newName;
        },
        getName: function () {
            console.log('My name is', name);
            return name;
        },
        setAge: function (newAge) {
            age = newAge;
        },
        getAge: function () {
            return age;
        }
    }
}

var agent = createAgent('Smith'); // Without "new", not needed

console.log(agent.getName());

setTimeout(agent.getName, 1000);