// reviewed 21.08.25

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
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        }); 
        // you were wrong here. 
        // review says; you were actually not wrong. coz in the previous file, we req.on('end', () => ) then later on we return res.end(). here there is no return res.end() so you return it early
        // req.on('end', () => {
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); 
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            // return res.end();
            // i dont know if the below is wrong
            res.end();
        });
    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
})

server.listen(3000);