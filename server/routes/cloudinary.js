const cloudinary = require('cloudinary').v2;

const express = require('express');
const cors = require('cors')

const router = express();
const dotenv = require('dotenv')
// require('dotenv').config();
// // Be sure to change the cloud_name, api_key, and api_secret to yours below
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     secure: true
// });
const options ={
    Origin:"https://blogwiz.netlify.app"
}
dotenv.config();
router.get('/booking' ,cors(options),(req, res) => {
    const timestamp = Math.round((new Date).getTime() / 1000);
    signature = cloudinary.utils.api_sign_request({
        ...req.query,
        source: 'uw',
        tags: ['profile'],
        upload_preset: 'profile',
        timestamp: timestamp
    },
        process.env.CLOUDINARY_API_SECRET
    );
    console.log(signature)
    res.send({signature, timestamp});
});

module.exports = router;