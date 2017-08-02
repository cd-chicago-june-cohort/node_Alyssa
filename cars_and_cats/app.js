var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    if(request.url === '/cars'){
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });    
    } else if(request.url === '/cats'){
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });    
    } else if(request.url === '/cars/new'){
        fs.readFile('./views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });   
    } 
    else if(request.url === '/stylesheets/style2.css'){
        fs.readFile('./stylesheets/style2.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        }); 
    } else if(request.url === '/images/cats1.jpeg'){
        fs.readFile('./images/cats1.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cats2.jpeg'){
        fs.readFile('./images/cats2.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cats3.jpeg'){
        fs.readFile('./images/cats3.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cats4.jpeg'){
        fs.readFile('./images/cats4.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cats5.jpeg'){
        fs.readFile('./images/cats5.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cats6.jpeg'){
        fs.readFile('./images/cats6.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cars1.jpeg'){
        fs.readFile('./images/cars1.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cars2.jpeg'){
        fs.readFile('./images/cars2.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cars3.jpeg'){
        fs.readFile('./images/cars3.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cars4.jpeg'){
        fs.readFile('./images/cars4.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cars5.jpeg'){
        fs.readFile('./images/cars5.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } else if(request.url === '/images/cars6.jpeg'){
        fs.readFile('./images/cars6.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });   
    } 
});

server.listen(6789);