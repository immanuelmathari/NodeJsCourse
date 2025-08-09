const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" > <button type="submit">Send</button> </form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        // allows us to listen to certain events
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        }); 
        req.on('end', () => {
            // to work with chunks, we buffer them. where "the bus stops and we interact with them"
            const parsedBody = Buffer.concat(body).toString(); // add all chunks to the body. you want to concatenate to the body
            console.log(parsedBody);
            // we want to take the parsed body and split it on the equal sign and take the second element index 1 store it in message. remember we are doing this iteratively on each chunk
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
})

server.listen(3000);