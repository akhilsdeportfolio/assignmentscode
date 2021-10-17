const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();


let newtoken=(user)=>
{
     let token=jwt.sign({user},process.env.SECRET_KEY);
     //console.log("Signed token"+token);
     return token;
}

const signin = async (req,res)=>
{
     let email=req.body.email;
     let pass=req.body.password;


          try{
               let user = await User.findOne({email});
               //console.log(user);
               if(!user)
               {
                         res.status(401).json({status:"failed",message:"no user found"});
               }
               let isCorrect=await user.checkPassword(pass);

//               console.log("IS matched"+isCorrect);
               if(!isCorrect)
               {
                    res.status(401).json({status:"failed",message:"Wrong password"});
               }


               let token= newtoken(user);
               res.status(201).json({user,token});

          }
          catch(e)
          {
               console.log(e);
               res.status(500).send(JSON.stringify(e));
          }


};

const signup = async (req,res)=>
{     
     try{
          let user =await User.create(req.body);
          let token=newtoken(user);
          res.status(200).json({data:token});
     }
     catch(e)
     {         console.log("Error"+e);
               res.status(500).json(e);

     }
     
     
};

module.exports ={signin,signup,newtoken};