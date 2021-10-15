const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const userSchema = new mongoose.Schema({
     email : {type:String,requried:true,unique:true},
     password:{type:String,requried:true},
     displayName:{type:String,required:false,default:"mysoftware_user"}
},{versionKey:true,timestamps:true})


userSchema.pre("save",(next)=>{
     if(!this.isModified("password")) return next;
     
     
     const hash = bcrypt.hashSync(this.password,8);
     this.password=hash;

     return next;

});


userSchema.methods.checkpassword=(password)=>{
     const match = bcrypt.compareSync(password,this.password);
     return match;
}

const User = mongoose.model("user",userSchema);
module.exports=User;