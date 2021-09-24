const mongoose=require('mongoose');

const assignmentSchema = new mongoose.Schema({
    question: {type:String,required:true},
    instructor_id:{type:String,required:true}
},{timestamps:true})

const Assignment= mongoose.model("assignment",assignmentSchema);

module.exports=Assignment;