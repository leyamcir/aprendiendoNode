/**
 * Created by Alicia on 18/04/2016.
 */
// Object constructor
function Fruit(name) {
    this.name = name || 'lemon';
    this.setName = function(value){
        this.name = value;
    }
}

// Create object
var fruit = new Fruit();

console.log(fruit);

fruit.setName('orange');

console.log(fruit);

/*
// "continue" example
var n = 0;
while (fruit.name === 'orange'){
    n++;
    console.log('ieration: ', n);
    if (n>10) {
        break;
        //continue;
    }
}
    */

var pear = new Fruit('pear');

console.log(pear);