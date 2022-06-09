const { required } = require("nodemon/lib/config")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    aId=book.author
    pId=book.author
    if ( !aId ) {
        res.send({msg : "author_id details is required"})
    }
    
   const authorInfo= await authorModel.findById(aId)
   if (!authorInfo) {
       res.send({msg : "enter the valid authorId"})//validation cheak of auther
   }   
    if (!pId) {
        res.send({msg : "PublisherId details required"})
    }
    const pubInfo = await publisherModel.findById(pId)
    if (!pubInfo) {
        res.send({msg : "enter the valid publisherId"})// validation chk of publisher
    }
    
    let bookCreated = await bookModel.create(book)
   
    res.send({data: bookCreated})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate("author","publiser")

    res.send({data: specificBook})

 }
 module.exports.createBook= createBook

module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails




