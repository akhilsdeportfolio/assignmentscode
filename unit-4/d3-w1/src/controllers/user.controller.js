const express = require('express');
const router = express.Router();
const User =require('../models/user.model');
const Gallery = require('../models/gallery');
const upload = require('../utils/fileupload');
const fs = require('fs');

router.post("/createuser",upload.single('profile_pic'),async (req,res)=>{     
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
          console.log("remove the local picture");
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
          fs.unlink(path,()=>{
               console.log("removed");
          },(error)=>{
               console.log("error"+error);
          })
     });


     let removedData = await Gallery.findByIdAndDelete(req.params.id).lean().exec();

     res.send(removedData);

})



module.exports=router;