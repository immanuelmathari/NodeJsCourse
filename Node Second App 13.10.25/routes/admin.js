const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// NOTE 01
const products = [];

router.get('/add-product' ,(req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post('/add-product', (req,res,next) => {
    // console.log(req.body);
    // NOTE 01
    products.push({title: req.body.title});
    res.redirect('/');
});

// NOTE this change
// module.exports = router;
exports.routes = router;
// NOTE 01
exports.products = products;

