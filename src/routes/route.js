const express = require('express');
const router = express.Router();

const authorController = require("../Controller/authorController")
const blogController = require("../Controller/blogController")




router.get("/test-me", function (req, res) {

    res.send("My first ever api!")
})

router.post("/authors",authorController.creatAuthor)

router.post("/blogs",blogController.createBlog)

router.get("/blogs",blogController.getAllBlogs)

router.put("/updateBlog", blogController.updateBlog)

router.delete("/blogs/:blogId",blogController.deleteBlogsByQuery)


module.exports = router;