// reviewed 21.08.25

const express = require('express');

// hii hapa lazima
const router = express.Router();

router.get('/' ,(req, res, next) => {
    res.send('<h1>Hello from Express shop</h1>');
})

module.exports = router;