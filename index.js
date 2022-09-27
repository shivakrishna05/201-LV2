const http = require('http')
const fs= require("fs");
//const { response } = require('express');

fs.readFile("home.html",
(err,hm) => {
if(err){
    throw err;
}
hc=hm;
});

fs.readFile("project.html",
(err,fllll) => {
    if(err)
    {
        throw err;
    }
    fc=fllll;
})

fs.readFile("registration.html",
(err,regform) => {
    if(err)
    {
        throw err;
    }
    eg=regform;
})
let args=require("minimist")(process.argv.slice(2));
http.createServer((request,response) =>{
    let url =request.url
    response.writeHeader(200,{"Content-type":"text/html"})
    switch (url)
    {
        case "/project":
            response.write(fc)
            response.end();
            break
        case "/registration":
            response.write(eg)
            response.end();
            break;
        default:
            response.write(hc)
            response.end();
            break;
    }
}).listen(args["port"]);
