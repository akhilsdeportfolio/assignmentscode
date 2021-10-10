const express = require('express');
const router = express.Router();
const User =require('../models/user.model');
const Gallery = require('../models/gallery');
const upload = require('../utils/fileupload');
const fs = require('fs');
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const newUser = require('../models/user2.model');



//console.log(body("first_name"))
router.post("/validateUserData",body("first_name").isLength({min:3}).withMessage("please enter a valid first name"),body("last_name").isLength({min:3}).withMessage("please enter a valid last name"),body("email").isLength({min:5}).withMessage("please enter a valid email address of length 5 characters atleast"),body("email").isEmail().withMessage("please enter a valid email"),body("pincode").isLength({min:6,max:6}).withMessage("please enter a valid pincode"),body("age").custom((value)=>{
     if(value > 0 && value < 101)
          return true;
     else
           throw new Error('Please enter valid age');

}),body("gender").custom((value)=>{
     if(value==='Male'||value==='Female'||value==='Others')
          return true;
     else
     throw new Error('Enter valid gender');

}),async (req,res)=>{

     let errors = validationResult(req);


     let e = errors.array().map((error)=>{
          return {msg:error.msg,param:error.param}
     });

     console.log(e);

     if(!(e.length==0))
     {
          res.status(400).json({errors:e})
     }
     else
     {
          try{
          let data=await newUser.create(req.body);
          res.status(201).json(data);
          }
          catch(e)
          {
               res.status(400).json(e);
          }
     }




});

router.post("/createuser",upload.single('profile_pic'),async (req,res,err)=>{     




     upload(req, res, function (err) {
          if (err) {
            return res.end('Error uploading your new avatar')
          }
      
         // res.end('You new avatar is uploaded')
        });


        let user = await User.create({
               first_name : req.body.first_name,
               last_name:req.body.last_name,
               profile_pic : req.file.path
          });

          //fs.unlink(req.file.path,()=>{
               //console.log("removed");
          //},(error)=>{
            //   console.log(error);
          //});
          res.json(user);
});


router.patch("/updateuser/:id",upload.single('profile_pic'),async (req,res)=>{     
     
     
     let userData = await User.find({_id:{$eq:req.params.id}});


     fs.unlink(userData[0].profile_pic,()=>{
          console.log("removed the local picture");
     },(error)=>{
          console.error("Failed to remove local picture"+error);
     });


     let user = await User.findByIdAndUpdate (req.params.id,req.body,{new:true});

     res.json(user);
});



router.delete("/delete/:id",upload.single('profile_pic'),async (req,res)=>{     
     
     
     let userData = await User.find({_id:{$eq:req.params.id}});


     fs.unlink(userData[0].profile_pic,()=>{
          console.log("remove the local picture");
     },(error)=>{
          console.error("Failed to remove local picture"+error);
     });


     let user = await User.findByIdAndDelete (req.params.id);

     res.json(user);
});


router.post("/addtogallery/:id",upload.array("pic"),async (req,res)=>{


     let filePaths = req.files.map(file => file.path);

     let gallery = await Gallery.create(
          {
               pictures:filePaths,
               user_id:req.params.id
          }
     );

     res.json(gallery);

});

router.post("/removefromgallery/:id",upload.array("pic"),async (req,res)=>{


     let galleryData = await Gallery.findById(req.params.id).lean().exec();

     galleryData.pictures.forEach((path)=>{
          console.log(path)
          fs.unlink(path,(error)=>{
          if(error!=null)
               console.log("error"+error);
          else
               console.log("Removed")     ;
          })
     });


     let removedData = await Gallery.findByIdAndDelete(req.params.id).lean().exec();

     res.send(removedData);

})



module.exports=router;