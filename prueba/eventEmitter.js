/**
 * Created by Alicia on 20/04/2016.
 */
"use strict";

var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('phone call', function (who) {
    if (who !== 'mother'){
        console.log('ring ring');
    }
});

emitter.on('phone call', function () {
    console.log('brr brr');
});

emitter.emit('phone call', 'mother');

emitter.emit('phone call', 'father');