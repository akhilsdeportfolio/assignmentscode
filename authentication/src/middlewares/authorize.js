const User = require('../models/user.model');

let authorize = (permittedRoles)=>{
return async (req,res,next)=>{


     if(!permittedRoles || permittedRoles.length==0)
       return next();
     let user = await User.findOne({_id:req.user._id,roles:{$in:permittedRoles}}).lean().exec();
     
     if(user)
     {
          return next();
     }
     else{
          return res.status(401).json({status:"Failed",message:"You are not authorized to veiw this"});
     }
     }
}

module.exports=authorize;
