/**
 * Created by Alicia on 19/04/2016.
 */
/*
//Fails
var person = {
    name: 'Juan',
    surName: 'López',
    printFullName: function () {
        console.log(this.name + ' ' + this.surName);
    }
};

// Works
person.printFullName();

// Undefined
setTimeout(person.printFullName, 2000);
 */

/*
// With bind
var person = {
    name: 'Juan',
    surName: 'López',
    printFullName: function () {
        console.log(this.name + ' ' + this.surName);
    }
};

// Works
person.printFullName();

// Undefined
setTimeout(person.printFullName.bind(person), 2000);// Use actual this on executed
*/

/*
// With arrow function
var person = {
    name: 'Juan',
    surName: 'López',
    printFullName: () =>{
        console.log(this.name + ' ' + this.surName);
    }
};

// Works
person.printFullName();

// Undefined
setTimeout(person.printFullName, 2000);// Use actual this on executed
    */

/*
// call | apply

var person = {
    name: 'Juan',
    surName: 'López',
    printFullName: function (n) {
        console.log(this.name + ' ' + this.surName + n);
    }
};

// Works
person.printFullName();

// Undefined
setTimeout(person.printFullName.bind(person), 2000);// Use actual this on executed
person.printFullName.call(person, 5); // comma
person.printFullName.apply(person, [5]); // array
    */

/*
// Use function from other object
var person = {
    name: 'Juan',
    surName: 'López',
    printFullName: function (n) {
        console.log(this.name + ' ' + this.surName + n);
    }
};

var person2 = {
    name: 'Pepe',
    surName: 'Ruiz'
};

// Works
//person.printFullName();

// Undefined
//setTimeout(person.printFullName.bind(person), 2000);// Use actual this on executed
person.printFullName.call(person, 5); // comma
person.printFullName.apply(person2, [5]); // array
*/