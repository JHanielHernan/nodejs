const http = require('http');

const port = process.env.PORT;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Hola mmama :)</h1>');
})

server.listen(3000,()=>{
    console.log("http://localhost:300");
})