const path = require('path');

const express = require('express');

const rootDir = require('../util/28-path');

const router = express.Router();

// router.get('/admin/add-product' ,(req, res, next) => {
router.get('/add-product' ,(req, res, next) => {
    // dirname makes the path to this files folder
    // and then we go up one level
    // to views
    // and then the file we want to server
    res.sendFile(path.join(rootDir, 'views', '29-add-product.html'));
})

// we can add this in 26-app.js
// router.post('/admin/add-product', (req,res,next) => {
router.post('/add-product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;

