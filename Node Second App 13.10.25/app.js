const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// NOTE #03
// tells express to use this engine whenever you try to render a template
app.set('view engine', 'pug');
app.set('views', 'views');

// 13.10.25
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin',adminRoutes); 
app.use('/admin', adminRoutes.routes); 

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);