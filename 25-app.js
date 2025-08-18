const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// const adminRoutes = require('./routes/25-admin.js');
const adminRoutes = require('./routes/25-admin');
const shopRoutes = require('./routes/25-shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes); // dont call it like a function
// the above also cant be below the below route. you know why

app.use(shopRoutes);

// a catch all middleware
app.use((req, res, next) => {
    // will handle all http methods post, get
    // res.send('<h1>Page not found</h1>');
    // to get status code
    // 404 common status when page not found
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);