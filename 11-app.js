const http = require('http');
const http2 = require('http');
const http3 = require('http');

function rqListener(req, res) {

}

// has a request Listener. a request Listener executes for every incoming request
http.createServer(rqListener); // this says, please look for this function and execute it for every request

// you could use an anonymous function
http2.createServer(function(req, res) {
    console.log(req);
});

// you have to store it in a variable
// const server = http3.createServer(function(req,res){
const server = http3.createServer((req,res) => {
    console.log(req);
    // to hard exit
    // process.exit();
})

server.listen(3000); // nodejs now will not immediately exit our script but will keep this running to listen to incoming requests