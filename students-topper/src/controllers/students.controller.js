const express = require('express');
const Student=require('../models/student.model');
const router=express.Router();




//-------------------CRUD STUDENTS ----------------------------------------------------

router.post("",async function (req, res) {

    const data=await Student.create(req.body);

    return res.status(201).send({data});

});


router.get("",async (req,res)=>{

    const data =await Student.find().populate("rollid").lean().exec();
    return res.status(200).send({data});
    
}); 


router.get("/:id",async (req,res)=>{

const data = await Student.find({_id:req.params.id}).populate("rollid",{name:1,age:1,email:1}).lean().exec();
return res.status(200).send({data});

}); 

router.patch("/:id",async (req,res)=>{
const data = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
return res.status(200).send({data});
});


router.patch("/:id",async (req,res)=>{
const data = await Student.findByIdAndDelete(req.params.id,req.body).lean().exec();
return res.status(200).send({data});
});


module.exports = router;


