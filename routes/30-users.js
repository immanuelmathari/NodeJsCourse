const express = require('express');
const path = require('path');
const rootDir = require('../util/30-path');

const router = express.Router();

router.get('/users', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', '30-users.html'));
})

module.exports = router;