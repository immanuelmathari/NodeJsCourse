const path = require('path');
const express = require('express');

const router = express.Router();

// we want to send a file
router.get('/' ,(req, res, next) => {
    // res.sendFile('./views/27-shop.html');
    // path concatenets different segments. the first one should be a global segment given by node.js. it holds tha absolute path to our OS
    // will work in both linux systems and windows
    // res.sendFile(path.join(__dirname, 'views', '27-shop.html'));
    // but views is located in a sibling folder. the dirname helps us to get to 27-shop.html. we create a segment to go one level up. 
    res.sendFile(path.join(__dirname, '../' , 'views', '29-shop.html'));

})

module.exports = router;