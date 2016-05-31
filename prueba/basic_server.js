/**
 * Created by Alicia on 18/04/2016.
 */
// Import http library
var http = require('http');

// Create server
var server = http.createServer(function (request, response) {
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

    //response.end('Wake up, Neo...\n');
    response.end('Wake up, <h1>Neo</h1>...\n');
});

// Launch server
server.listen(1337, '127.0.0.1'); //< 1024 are protected by SO
console.log('Launched server in http://127.0.0.1:1337');