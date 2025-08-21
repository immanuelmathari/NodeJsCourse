// reviewed 21.08.25

const http = require('http');
const routes = require('./18-routes');

// const server = http.createServer(routes);
const server = http.createServer(routes.handler);
console.log(routes.someText);

server.listen(3000);