const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   //console.log(req.url);

   switch(req.url){
   case '/aboutus': 
   filePath=__dirname + '/pp/about.html';
   break;
   default:
    filePath = __dirname + '/pp/index.html'; 
    break;
    
   }
   switch(req.url){
      case '/Products': 
      filePath=__dirname + '/pp/product.html';
      break;
      default:
       filePath = __dirname + '/pp/index.html'; 
       break;
       
      }
      switch(req.url){
         case '/Services': 
         filePath=__dirname + '/pp/product.html';
         break;
         default:
          filePath = __dirname + '/pp/index.html'; 
          break;
          
         }
   fs.readFile(filePath,(err, data)=>{
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.end(data, 'utf8');
});
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});