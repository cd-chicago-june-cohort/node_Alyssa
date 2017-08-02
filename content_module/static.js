var fs = require('fs');

module.exports = function(request, response){
    var splitURL = request.url.split('/');
    var end_of_url = splitURL[splitURL.length-1];
    var firstChunk = splitURL[1];
    console.log(splitURL);
    console.log(end_of_url);
    console.log(firstChunk);

    switch(firstChunk) {
        case 'stylesheets':
            serveCSS(request.url, response);
            break;
        case 'images':
            serveImage(request.url, response);
            break;
        default:
            // Note - all html files should be saved using the name of the last element of the extension/url
            // Example:  index.html/dojo/new/admin would render admin.html
            fs.readFile(`./views/${end_of_url}.html`, 'utf8', function(error, contents){
                // Check to see if an error exists
                if (error) { return serve404(response); }
                // Respond to the browser
                response.writeHead(200, {'Content-type' : 'text/html' });
                response.write(contents);
                response.end();
            });
    }

    function serveCSS(url, response){
        fs.readFile(`./${url}`, 'utf8', function(error, contents){
            // Check to see if an error exists
            if (error) { return serve404(response); }
            // Respond to the browser
            response.writeHead(200, {'Content-type' : 'text/css' });
            response.write(contents);
            response.end();
        });
    }

    function serveImage(url, response){
        fs.readFile(`./${url}`, function(error, contents){
            // Check to see if an error exists
            if (error) { return serve404(response); }
            // Respond to the browser
            response.writeHead(200, {'Content-type' : 'image/jpeg' });
            response.write(contents);
            response.end();
        });
    }

    function serve404(response){
        response.writeHead(404);
        response.end("File not found!");
    }
};
