const mongoose=require('mongoose');
const hashtagSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  //you have to know how many tweets belongs to a hashtags(tweets->multiple hashtag) and (one hashtag ->multiple tweets)
 tweets:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }
 ]




},{timestamps:true});
const Hashtag=mongoose.Model('Hashtag',hashtagSchema);
module.exports=Hashtag;