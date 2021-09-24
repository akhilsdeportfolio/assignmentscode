const express = require('express');

const User = require('../models/users.model');

const router= express.Router();
//-------------------CRUD USERS ----------------------------------------------------

router.post("",async function (req, res) {

    const data=await User.create(req.body);

    return res.status(201).send({data});

});


router.get("",async (req,res)=>{

    const data =await User.find().lean().exec();
    return res.status(200).send({data});
    
}); 


router.get("/:id",async (req,res)=>{

const data = await User.find({_id:req.params.id}).lean().exec();
return res.status(200).send({data});

}); 

router.patch("/:id",async (req,res)=>{
const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
return res.status(200).send({data});
});


router.patch("/:id",async (req,res)=>{
const data = await User.findByIdAndDelete(req.params.id,req.body).lean().exec();
return res.status(200).send({data});
});




module.exports=router;