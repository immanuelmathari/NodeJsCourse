// reviewed 21.08.25

// 14.08.25
const http = require('http');
const express = require('express');

const app = express();

app.use('/', (req,res,next) => {
    console.log("this always runs");
    next();
})

app.use('/add-product' ,(req, res, next) => {
    console.log('In another middlware');
    res.send('<h1>Hello from Express 2</h1>');
})

app.use('/' ,(req, res, next) => {
    console.log('In another middlware one');
    res.send('<h1>Hello from Express</h1>');
})

app.listen(3000);