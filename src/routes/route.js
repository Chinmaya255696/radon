const express = require('express');

const router = express.Router();

const logger =require('../.logger')

const helper = require('../util')

const formatter = require('../validator')

router.get('/test-me1', function (req, res) {
   logger.welcome()
    res.send('My first ever api!')
});

router.get('/test-me2', function (req, res) {
    helper.printDate()
    helper.printMonth()
    helper.getBatchinfo()
     res.send('My 2nd ever api!')
 });

 router.get('/test-me3', function (req, res) {
    formatter.trim()
    formatter.changetoLowerCase()
    formatter.changeToUpperCase()
     res.send('My 3rd ever api!')
 });
module.exports = router;
// adding this comment for no reason