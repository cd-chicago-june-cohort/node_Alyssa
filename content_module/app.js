var http = require('http');

var static_files = require('./static.js');

var server = http.createServer(function(request, response){
    static_files(request, response);
});

server.listen(6789);