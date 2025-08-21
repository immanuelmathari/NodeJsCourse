// reviewed 21.08.25

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/27-admin');
const shopRoutes = require('./routes/27-shop');

app.use(bodyParser.urlencoded({ extended: false }));

// this is a filter
app.use('/admin',adminRoutes); 

app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    // since we are in the root, we dont need to go up one level like the others
    res.status(404).sendFile(path.join(__dirname, 'views', '27-404.html'));
})

app.listen(3000);