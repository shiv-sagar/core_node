var http = require('http');

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.

// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   res.end("Welcome to NodeJs");
// };

// server.listen(5555, console.log("server started running on port no 5555"));


// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.

// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   res.end(JSON.stringify(req.headers));  
// }

// server.listen(6666, console.log("server started on 6666..."))

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.

// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   console.log(req.method, req.url);
//   res.end("response sent");  
// }

// server.listen(3000, console.log("server started on 3000..."))


// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000

// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h3>html content</h3>");
// }

// server.listen(3000, console.log("server started on 3000..."))

// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response
  
  // var fs = require("fs");
  // var server = http.createServer(handleRequest);
  // function handleRequest(req, res) {
  //   res.setHeader("Content-Type", "text/html");
  //   fs.readFile(__dirname + "/index.html", (err,data) => {
  //     if (err) {
  //       return res.end("ERROR");        
  //     } else {
  //       res.end(data);
  //     }
  //   });
  // }
  

  //server.listen(3000, console.log("server started on 3000..."))

// 6. create a server
  // - create 3 diffenrent file ie. indx.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html filevar fs = require("fs");
  
  // var server = http.createServer(handleRequest);
  // var url = require('url');
  // var fs = require('fs');

  // function handleRequest(req, res) {
  //   res.setHeader('Content-Type', 'text/html');
  //   var parsedUrl = url.parse(req.url);
    
  //   if(parsedUrl.pathname === '/') {
  //     fs.createReadStream('./index.html').pipe(res);
  //   } else if(parsedUrl.pathname === '/about') {
  //       fs.createReadStream('./about.html').pipe(res);
  //   } else if(parsedUrl.pathname === '/contact') {
  //       fs.createReadStream('./contact.html').pipe(res);
  //   } else {
  //       res.end('Requested Page Not Found!');
  //   }
  // }

  // server.listen(3000, console.log('Server is running on port 3000'));

// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response

  // var server = http.createServer();

  // server.on("request", (req,res) => {
  //   var store = "";
  //   req.on("data", (c) => {
  //     store += c;
  //   })
  //   req.on("end", () => {
  //     res.end(store);
  //   })
  // })

  // server.listen(3000, console.log('Server is running on port 3000'));


// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response

  // var server = http.createServer();

  // server.on('request', (req,res) => {
  //   var store = "";
  //   req.on("data", (c) => {
  //     store += c;
  //   })
  //   req.on("end", () => {
  //     res.end(store);
  //   })
  // })

  // server.listen(3000, console.log('Server is running on port 3000'));


// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response
  
//   var server = http.createServer();
//   var qs = require("querystring")

//   server.on('request', (req,res) => {
//     var store = "";
//     req.on("data", (c) => {
//       store += c;
//     })
//     req.on("end", () => {
//       var parsedData = qs.parse(store);
//       console.log(parsedData);
//       res.end(JSON.stringify(parsedData));
//     })
//   })
  
// server.listen(3000, console.log('Server is running on port 3000'));


// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response

  
  var url = require("url");

  var server = http.createServer();
  

  server.on('request', (req,res) => {
    var store = "";
    var parsedUrl = url.parse(req.url);

    req.on("data", (c) => {
      store += c;
    })
    req.on("end", () => {
      console.log(parsedUrl);
      res.end("path in url is-" + parsedUrl.path);
    })
  })
  
server.listen(7000, console.log('Server is running on port 7000'));


  



// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node

  var path = require("path");

  var absolutePath = path.join(__dirname + "/theory.md")

  var relativePath = "./theory.md";
