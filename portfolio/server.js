const http = require('http');
const { parse } = require('url');
const fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.url)
    
    var parsedUrl = parse(req.url);
    var imgExt = ['svg','png','jpg','jpeg','webp'];
    
    if(parsedUrl.pathname === '/') {

        fs.createReadStream('./index.html').pipe(res);

    }else if(parsedUrl.pathname.includes('html')) {
       
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('.' + req.url).pipe(res)
        
        
    } else if(parsedUrl.pathname.includes('css')) {

        res.setHeader('Content-Type','text/css'); 
        fs.createReadStream('.' + req.url).pipe(res)

        
    } else {
        for(var i = 0; i < imgExt.length; i++) {            
            
            if(parsedUrl.pathname.endsWith(imgExt[i])|| parsedUrl.pathname.endsWith(imgExt[i].toUpperCase())) {
                console.log(req.url);

                res.setHeader('Content-Type','images/*');
                fs.createReadStream('.' + req.url).pipe(res);
                break;

            } 
            
        }

    }
}

server.listen(4000, () => console.log('Server is running on port 4000'));