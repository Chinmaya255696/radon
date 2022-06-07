const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const bookModel = require("../models/bookModel")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", async function(req,res){
let data=req.body
let savedData= await bookModel.create(data)
res.send({msg : savedData})})

router.get("/bookList", async function(req, res){
let allBooks = await bookModel.find().select({bookName:1, authorName:1, _id:0})
return res.send({msg : allBooks})

})
router.post("/getBooksInYear", async function(req, res){
    let publishingYear = req.body.year
    let allBooks = await bookModel.find({year: publishingYear})
    return res.send({msg : allBooks})
})
router.get("/getParticularBooks", async function(req,res){
    let allBooks = await bookModel.find(req.body)
    return res.send({msg : allBooks})
})
router.get("/getXINRBooks", async function(req, res){
    let allBooks = await bookModel.find({$or: [{"prices.indianPrice":{$eq : 100}},{"prices.indianPrice":{$eq : 200}},{"prices.indianPrice":{$eq : 500}}]});
return res.send({msg : allBooks})
})
router.get("/getRandomBooks", async function(req,res){
    let allBooks = await bookModel.find({$or:[{totalPages:{$gt:"500"}},{stockAvailable: true}]})
})

module.exports = router;