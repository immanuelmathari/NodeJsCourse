// 11.08.25
// NOTE ToDo I dont know why this takes so much time to run

const http = require('http');
const routes = require('./19-routes.js');

const server = http.createServer(routes.requestHandler);

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;


//     if (url === '/users') {
//         res.write('<html>')
//         res.write('<head><title>Dummy Data</title></head>');
//         res.write('<body><ul><li>Dad</li><li>Mum</li><li>Vicky</li><li>Manu</li><li>Baraka</li><li>Zawadi</li><li>Kesh</li><li>Adayah</li></ul></body>');
//         res.write('</html>');
//         return res.end();
//     }

//     if (url === "/") {
//         res.write('<html>');
//         res.write('<head><title>Add your name</title></head>');
//         res.write('<html>');
//         res.write('<body><h1>Hello there from Immanuel Mathari Node server</h1>');
//         res.write('<form method="POST" action="/create-user"> <input type="text" name="username" /> <button type="submit">Send</button>  </form> </body>');
//         res.write('</html>');
//         // this is like a MUST
//         return res.end();
//     }

//     if (url === "/create-user" && method === 'POST') {
//         const body = [];
//         // how can i simply render the response here. should i go the route of doing the body and chunk
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         return req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const username = parsedBody.split('=')[1];
//             res.write(`<html><body><h1>User created: ${username}</h1></body></html>`);
//             res.end();
//         })

//     }

//     res.statusCode = 404;
//     res.write('<html><body><h1>Page not found</body></html>');
//     res.end();
// })

server.listen(3000);