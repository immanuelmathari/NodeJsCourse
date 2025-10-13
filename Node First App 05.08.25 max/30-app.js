const express = require('express');
const path = require('path');


const app = express();

const userRoutes = require('./routes/30-users');

// you had forgotten this
app.use(userRoutes);

app.use('/', (req,res,next) => {
    res.send('<h1>youve hit me</h1>')
})

app.listen(3000);
// ToDo finish this up