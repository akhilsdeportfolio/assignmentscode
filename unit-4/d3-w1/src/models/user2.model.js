const mongoose = require('mongoose');



let userSchema = new mongoose.Schema({
     first_name :{type:String,required:true},
     last_name:{type:String,required:true},
     email:{type:String,required:true},
     pincode:{type:String,required:true},
     age:{type:Number,required:true},
     gender:{type:String,required:true}
})


let newUser = mongoose.model("newuser",userSchema);