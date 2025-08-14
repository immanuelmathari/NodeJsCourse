// 14.08.25
const http = require('http');
const express = require('express');

const app = express();

// will be reached first
app.use('/add-product' ,(req, res, next) => {
    console.log('In another middlware');
    res.send('<h1>Hello from Express 2</h1>');
})

// this will never happen coz of no next() in previous middleware
app.use('/' ,(req, res, next) => {
    console.log('In another middlware');
    res.send('<h1>Hello from Express</h1>');
})

app.listen(3000);