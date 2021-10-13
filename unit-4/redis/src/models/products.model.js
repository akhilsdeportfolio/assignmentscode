const mongoose = require('mongoose');

const productsSchema =new mongoose.Schema({
     name:{type:String,required:false},
     category:{type:String,required:false},
     price:{type:Number,required:true}
});

module.exports= mongoose.model("product",productsSchema) ;
