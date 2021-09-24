const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    date: {type:String,required:true},
    name: {type:String,required:true},
    students:[{type:mongoose.Schema.Types.ObjectId,ref:"student",required:false}],
    marks:[{type:Number,required:true}]
},{timestamps:true})

const Assignment= mongoose.model("assignment",assignmentSchema);

module.exports=Assignment;