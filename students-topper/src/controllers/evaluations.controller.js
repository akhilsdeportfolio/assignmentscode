const express = require('express');
const Evaluation=require('../models/evaluations.model');
const router=express.Router();




//-------------------CRUD STUDENTS ----------------------------------------------------

router.post("",async function (req, res) {

    const data=await Evaluation.create(req.body);

    return res.status(201).send({data});

});


router.get("/highest/:id",async (req,res)=>{
    const data = await Evaluation.find({_id:req.params.id}).populate("students").lean().exec();

    console.log(data);
    let max=data[0].marks[0];
    let ind=0;
    data[0].marks.forEach(function(marks,index){
        if(marks > max)
        {
            max=marks;
            ind=index;
        }
    });


    return res.status(200).send({topper:data[0].students[ind]});
});

router.get("",async (req,res)=>{

    const data =await Evaluation.find().populate("students").lean().exec();
    return res.status(200).send({data});
    
}); 


router.get("/:id",async (req,res)=>{

const data = await Evaluation.find({_id:req.params.id}).populate("students").lean().exec();
return res.status(200).send({data});

}); 

router.patch("/:id",async (req,res)=>{
const data = await Evaluation.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
return res.status(200).send({data});
});


router.patch("/:id",async (req,res)=>{
const data = await Evaluation.findByIdAndDelete(req.params.id,req.body).lean().exec();
return res.status(200).send({data});
});


module.exports = router;


