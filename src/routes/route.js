const express = require('express');
const logger=require('../logger/logger');
const helper=require('../util/helper');
const validator=require('../validator/formatter')

const router = express.Router();

router.get('/question1', function (req, res) {
    console.log(logger.welcome())
    res.send('1st question is done!')
});

router.get('/question2', function (req, res) {
    console.log(helper.printDate())
    console.log(helper.printMonth())
     console.log(helper.getBatchInfo())
    res.send('2nd question is done!')
})

router.get('/question3', function (req, res) {
    console.log(validator.trim());
    console.log(validator.toLowerCase());
    console.log(validator.toUpperCase());
    res.send('3rd question is done!')
});


module.exports = router;
// adding this comment for no reason