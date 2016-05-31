/**
 * Created by Alicia on 30/04/2016.
 */
"use strict";

function* generator(num) {
    num--;
    let inyected = yield num;
    console.log('inyected', inyected);
    num--;
    yield num;
    num--;
    yield num;
}

let iterator = generator(10);

console.log(iterator.next('a'));
console.log(iterator.next(22));
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());