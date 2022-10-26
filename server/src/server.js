const express = require('express')
const dotenv = require('dotenv')
const users = require('../routes/user');
dotenv.config();
const cors = require('cors')
const app = express(); 
require('../db/db')
// app.use(cors())
app.use(cors({origin: ["https://127.0.0.1:5173","https://localhost:5173"] , credentials : true}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cookieParser = require('cookie-parser');
app.use(function(req, res, next) {  
    // res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers","*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});  
// const app = express();
// const cors = require('cors');
// const auth = require('../middleware/auth')
// const User = require('../models/user')
app.use(express.json());

app.use(cookieParser())
// app.use(cors());
app.use('/api/',users)
app.listen(process.env.PORT,()=>{
    console.log('Listening on port: '+process.env.PORT)
})