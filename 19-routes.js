const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Add your name</title></head>');
        res.write('<body><h1>Hello there from Immanuel Mathari Node server</h1>');
        res.write('<form method="POST" action="/create-user"> <input type="text" name="username" /> <button type="submit">Send</button>  </form> </body>');
        res.write('</html>');
        // this is like a MUST
        return res.end();
    }

    if (url === '/users') {
        // NOTE you forgot about this
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Dummy Data</title></head>');
        res.write('<body><ul><li>Dad</li><li>Mum</li><li>Vicky</li><li>Manu</li><li>Baraka</li><li>Zawadi</li><li>Kesh</li><li>Adayah</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === "/create-user" && method === 'POST') {
        const body = [];
        // how can i simply render the response here. should i go the route of doing the body and chunk
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        // NOTE the difference.
        // when the return is there the res code is undetected
        req.on('end', () => {
        // return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            // const username = parsedBody.split('=')[1];
            // res.write(`<html><body><h1>User created: ${username}</h1></body></html>`);
            // return res.end();
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();


    }

    res.statusCode = 404;
    res.write('<html><body><h1>Page not found</body></html>');
    res.end();
}

module.exports = requestHandler;