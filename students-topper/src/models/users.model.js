const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:Number,required:true},
    sex:{type:String,required:false}
},{timestamps:true});

const User = mongoose.model("user",userSchema);

module.exports = User;