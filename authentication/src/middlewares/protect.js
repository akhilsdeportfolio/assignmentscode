const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();


const verifyToken=(token)=>{
     return new Promise((resolve,reject)=>{
          jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
               if(err)
                    return reject(err);


               return resolve(payload);     
          });
     })
}

const protect = async (req,res,next)=>{
     const bearer = req.headers.authorization;

     if(!bearer || !bearer.startsWith("Bearer "))
     {
          res.status(401).json({error:"No token found"});
     }

     let token = bearer.split(" ")[1];

     try{


          let payload = await verifyToken(token);


          if(!payload)
          {
               res.status(401).json({status:"Failed",message:"unauthorized access"})
          }

          req.user = payload.user;          
          next();


     }    
     catch(e)
     {
          next(e);
          //res.status(500).json({error:e});
     }
}

module.exports=protect;