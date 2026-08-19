const express = require ("express");
const multer = require ("multer");
const uploadFile = require ("./services/storage.service.js");
const postModel = require ("./models/post.model");
const cors = require("cors") //middleware for CORS error

const app = express (); //express app instance
app.use (express.json()); // for raw=>json data
app.use(cors());// for CORS error
//
const upload = multer({storage: multer.memoryStorage()}); //for form-data=>file data

//same upload single name as API "key" from postman
app.post('/create-post', upload.single('image'), async(req, res) => {
    // Handle post creation logic here

    const result = await uploadFile(req.file.buffer);    

    const post =await postModel.create({
        image:result.url,
        caption:req.body.caption,
    })
    return res.status(200).json({
        message: "Post created successfully",
        post
    }); //New resource creation thats why 201 is used
});


//Get all posts
app.get('/get-posts', async(req, res) =>{
    const posts = await postModel.find(); //postModel is used to get all the posts from database
    return res.status(200).json({
        message: "Posts retrieved successfully",
        posts
    });
});

module.exports = app;
