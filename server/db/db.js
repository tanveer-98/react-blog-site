const mongoose = require('mongoose');
const path = require('path')
// console.log('inside mongoose')
// console.log(path.resolve(__dirname, '../dev.env'))
require('dotenv').config();
// console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL);
