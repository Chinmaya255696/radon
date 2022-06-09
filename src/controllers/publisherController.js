
const publisherModel= require("../models/publisherModel")

let creatPublisher = async function(req, res){
    let publisher= req.body
    let publisherCreated= await publisherModel.create(publisher)
    res.send({msg :publisherCreated })
}
module.exports.creatPublisher=creatPublisher