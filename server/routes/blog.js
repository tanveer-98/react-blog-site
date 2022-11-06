const express = require('express')
const router = express.Router(); 
const Blog = require('../models/blog')
const auth = require('../middleware/auth')


router.get('/blogs/me', auth,async (req,res)=>{
    
    //console.log("COOKIES"+req.cookies.token)
    const blogs = await Blog.find({owner : req.user._id});
    // //console.log("BLOGS "+ blogs)
    
    if(blogs.length==0) return res.status(404).send({
        error:'404',
        message: 'No blogs exist for the user'
    })

    return res.status(200).send({
        message: 'Blogs found',
        blogs : blogs
    })
})


router.post('/blogs/me',auth ,async (req,res)=>{
    // //console.log('clicked')
    //console.log("@GET BLOGS/ME")
    //console.log(req.body)
    //console.log('USER DETAILS')
    //console.log(req.user);
    if(Object.keys(req.body).length==0) return res.status(404).send({error:'404', message : 'Body cannot be empty'})
    //console.log("cookie"+ req.cookies.token)
    // //console.log('user token data')
    // //console.log(req.user)
    const blog  = new Blog({...req.body, owner : req.user._id , ownerName: req.user.name})

    try{
        await blog.save()
        return res.status(200).send({
            message : 'Post Successful'
        })

    }

    catch(err){
        return res.status(404).send({message : 
            err.message
        })
    }  
})

router.get('/blogs/:id',auth,async (req,res)=>{
  
    // if(Object.keys(req.body).length==0) return res.status(404).send({error:'404', message : 'Body cannot be empty'})

    const id = req.params.id;
    //console.log(id)

    const blog  = await Blog.findOne({_id:id});
    //console.log(blog)

    if(!blog) return res.status(404).send({error:'404', message:' Blog not found'});

    return res.status(200).send(blog);
})


// router.get('/blogsAll',async (req,res)=>{
//     const blog = await Blog.find({});
//     return res.status(200).send(blog);
// })


router.get('/blogsAll',async ( req,res)=>{
    // //console.log(params)
    const {index}  = req.query;
    //console.log(index)
    const blogs = await Blog.find({}).skip(5*(index-1)).limit(5)

    res.status(200).send(blogs);
})

router.get('/totalPages',async ( req,res)=>{
    // //console.log(params)
    
    //console.log(index)
    const totalBlogs = await Blog.find({});
    return res.status(200).send( JSON.stringify(totalBlogs.length
    ))
})

router.get('/userInterested',auth,async (req,res)=>{

    const userinterests = req.user.interested;
    const {index} = req.query;
    console.log(userinterests)
    const blogs = await Blog.find( { tags: { $in: userinterests } , owner:{$ne:req.user._id} }, { _id: 0 }).skip(5*(index-1)).limit(5)
    return res.status(200).send(blogs)
})

module.exports = router;