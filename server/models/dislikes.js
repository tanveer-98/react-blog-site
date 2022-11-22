const mongoose = require("mongoose");

// BLOG Schema:

const dislikesSchema = new mongoose.Schema(
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
const DisLikes = mongoose.model("dislikes", dislikesSchema);

module.exports = DisLikes;
