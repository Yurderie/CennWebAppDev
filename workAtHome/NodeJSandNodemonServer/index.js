const http = require('http');
const fs = require('fs'); //file system

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {

    let filePath=__dirname+'/public/index.html';
    console.log(req.url);

    switch(req.url){
        case '/aboutus': 
            filePath=__dirname+'/public/about.html';
            break;
        
        default: 
            filePath=__dirname+'/public/index.html';
            break;
    }

    fs.readFile(filePath, (err,data) =>{
        res.statusCode = 200; // 200 means everything ok. For example 404 means error
        res.setHeader('Content-Type', 'text/html');
        res.end(data,'utf8');
    });
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});