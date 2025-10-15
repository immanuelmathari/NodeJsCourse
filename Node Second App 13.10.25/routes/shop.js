const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
// NOTE 02
const adminData = require('./admin');

const router = express.Router();

router.get('/' ,(req, res, next) => {
 
    // res.sendFile(path.join(__dirname, '../' , 'views', 'shop.html'));

    // NOTE 02 how data shared from admin.js from the form submission is taken in here
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    // NOTE #03b
    res.render('shop.pug');

})

module.exports = router;