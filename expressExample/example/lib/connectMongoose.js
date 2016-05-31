/**
 * Created by Alicia on 25/04/2016.
 */
var mongoose = require('mongoose');
var conn = mongoose.connection;

// Connection event Handlers
conn.on('error', console.log.bind(console, 'connection error!'));

conn.once('open', function () {
    console.log('Connected to mongodb!')
})

// Database connect

// mongoose instead of conn
mongoose.connect('mongodb://localhost:27017/cursonode'); // no need to callback because of mongoose


