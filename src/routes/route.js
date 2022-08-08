const express = require('express');
const logger=require('../logger/logger');
const helper=require('../util/helper');
const validator=require('../validator/formatter')
let lodash = require("lodash")

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
router.get('/question4', function (req, res) {
    let month =["January","Febuary","March","April","May","June","July",
    "August","september","October","November","December"]
    let result1 = lodash.chunk(month,4)
    console.log(result1);
    res.send('4th question is done!')
});


module.exports = router;
// adding this comment for no reason