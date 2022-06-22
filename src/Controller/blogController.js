const blogsModel = require("../model/blogsModel")


const createBlog = async function (req, res) {
    try {
        let data = req.body
        if (!data.authorId) {
            return res.status(400).send({ status: false, message: 'Author id is required' })

        }
        if (authorModel.findById(data.authorId)) {
            let savedData = await blogModel.create(data)
            res.status(201).send({ status: true, msg: savedData })
        }
    }
    catch (err) {

        res.status(500).send({ error: err.message })
    }
}

const getAllBlogs = async function (req, res) {
    try {
        let data=req.query
        let savedData = await blogsModel.find({ $and: [{ isDeleted: false }, { isPublished: true }] })
        if (Object.keys(data).length === 0) {
            return res.status(200).send({ status: true, data: savedData });
        }
        let findByQuery = await blogsModel.find({ $or: [{ subcategory: req.query.subcategory }, { authorId: req.query.authorId }, { tags: req.query.tags }, { category: req.query.category }] })
        let final = []
        if (findByQuery.length > 0) {
            for (let i of findByQuery) {
                if (i.isDeleted == false && i.isPublished == true) {
                    final.push(i)
                }
            }
        }
        return res.status(200).send({ status: true, msg: final })
    }

    catch (err) {
        res.status(500).send({ status: false, msg: err.message })

    }
}
const updateBlog = async function(req, res) {

    try {
        let blogId = req.params.blogId
        let blogvalid = await blogsModel.findOne({_id:blogId},{isDeleted:false});
        
    
        if (!blogvalid) {
          return res.status(404).send({status:false,msg:"no such blog present in database"});
        }
    
        let Data = req.body;
        let uptodateBlog = await blogsModel.findOneAndUpdate({ _id: blogId },Data,{ $set:{isPublished:true,publishedAt:Date.now()}});
        res.status(201).send({status:true, msg:uptodateBlog });
    
      } catch (err) {
        console.log("This is the error:", err.message)
        res.status(500).send({ mgs: "Error", error: err.message })
      }
    };
const deleteBlogsByQuery = async function(req,res){
    try{
        let data = req.query
       const deleteBlogsByQuery= await blogsModel.updateMany(
        {$and:[data,{isDeleted:false}]},
        {$set:{isDeleted:true,deletedAt:new Date.now()}},
        {new:true}
       )
    
    if(!deleteBlogsByQuery)
    return res.status(404).send({ status:false,msg: "Document not found" })
    
    }catch(error){
        res.status(500).send({msg :"Error", error: error.message})
    }
}

module.exports.createBlog = createBlog
module.exports.getAllBlogs = getAllBlogs
module.exports.updateBlog = updateBlog
module.exports.deleteBlogsByQuery = deleteBlogsByQuery