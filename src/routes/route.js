const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const bookModel = require("../models/bookModel")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", async function(req,res))
let data=req.body
let savedData= await bookModel.create(data)
res.send({msg : savedData})
module.exports = router;