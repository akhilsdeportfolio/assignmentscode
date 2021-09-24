const mongoose=require('mongoose');

const studentSchema = new mongoose.Schema({
    rollid: {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    username:{type:String,required:true},
    batch:{type:String,required:true}
},{timestamps:true});

const Student= mongoose.model("student",studentSchema);

module.exports=Student;