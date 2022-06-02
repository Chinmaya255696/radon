const express = require('express');

const router = express.Router();

const logger = require('../logger/logger')

const myhelper = require('../util/helper')

const formatter = require('../validator/formatter')

router.get('/test-me1', function (req, res) {
   logger.welcome()
    res.send('My first ever api!')
});

router.get('/test-me2', function (req, res) {
   myhelper.printDate()
   myhelper.printMonth()
   myhelper.getBatchInfo()
     res.send('My 2nd ever api!')
 });

 router.get('/test-me3', function (req, res) {
    formatter.trim()
    formatter.lowercase()
    formatter.upperCase()
    
     res.send('My 3rd ever api!')
 });
module.exports = router;
// adding this comment for no reason