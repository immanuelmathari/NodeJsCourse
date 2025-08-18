// 18.08.25
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded()); // will call next for the request body parsing. we wount do it manually unlike the last times
app.use(bodyParser.urlencoded({extended: false})); //  this says that it will not parse things that are not default.
// now with this above, we get a JavaScript object with a key value pair

app.use('/', (req,res,next) => {
    next();
})

app.use('/add-product' ,(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <button type="submit">Add product</button> </form>');
})

app.use('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/' ,(req, res, next) => {
    res.send('<h1>Hello from Express</h1>');
})

app.listen(3000);