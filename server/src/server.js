const express = require('express')
const dotenv = require('dotenv')
const users = require('../routes/user');
const blogs = require('../routes/blog')
const cloudinary = require('../routes/cloudinary')
const cors = require('cors')
const cookieParser = require('cookie-parser');
require('../db/db')
const app = express(); 
dotenv.config();
// app.use(cors())
app.use(function(req, res, next) {  
    // res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Headers","*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});
app.use(cors({origin: ["http://127.0.0.1:5173","http://localhost:5173","https://127.0.0.1:5173","https://localhost:5173","https://blogwiz.netlify.app",
"https://weatheroo-app.netlify.app"] , credentials : true}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  
// const app = express();
// const cors = require('cors');
// const auth = require('../middleware/auth')
// const User = require('../models/user')
app.use(express.json());

app.use(cookieParser())
// app.use(cors());
app.use('/api/',users);
app.use('/api/',blogs);
app.use('/api/cloudinary',cloudinary);
// console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log('Listening on port: '+process.env.PORT)
})