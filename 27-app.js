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
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);