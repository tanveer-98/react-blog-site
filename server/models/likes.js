const mongoose = require("mongoose");

// BLOG Schema:

const likesSchema = new mongoose.Schema(
  {
    
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'User'
    },
    blogID :{
        type : mongoose.Schema.Types.ObjectId,
        required : true ,
        ref : 'Blog'
    }
   
  },
  {
    timestamps:true
  },
  { versionKey: false }
);

//creating the model 
const Likes = mongoose.model("likes", likesSchema);

module.exports = Likes;
