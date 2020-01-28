var module_http= require('http');
var module_fs= require('fs');
var module_url= require('url');
var module_querystring= require('querystring');
var mymod = require('./module/mymod.js')
var {countries} = require('countries-list')


var server = module_http.createServer(function(request, response){

    var parsed_url = module_url.parse(request.url);
    var pathname = parsed_url.pathname;
    var query = module_querystring.parse(parsed_url.query);
    console.log("query is : ", query);

    if(pathname==="/"){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write('<html><body><p>HELLO</p></body></html>');
    }else 
    if(pathname==="/exit"){ 
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write('<html><body><p>BYE</p></body></html>');
    }else 
    if(pathname==="/info"){ 
        var result = mymod.info(pathname)
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write(result);
    }else 
    if(pathname==="/country"){ 
        response.writeHead(200, {"Content-Type":"application/json"});
        response.write(JSON.stringify(countries[query.code]));
    }else 
    if(pathname==="/error"){ 
        var result = mymod.err(pathname)
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write(result);
    }else { 
        response.writeHead(404, {"Content-Type":"text/html"});
        response.write('<html><body><p>NOT FOUND</p></body></html>');
    }
response.end();
});



server.listen(4000);
console.log("Running on Port:4000");