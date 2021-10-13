const express= require('express');
const router = express.Router();
const {client,redis} = require('../config/redis');
const Product = require('../models/products.model');
router.get('/',async function(req,res){

     client.get("products",async (err,response)=>{
          if(!response)
          {
               let prods=await Product.find({}).lean().exec();
               console.log(prods);
               client.set("products",JSON.stringify(prods));
               res.status(201).json({"products":prods});
          }
          else
          {
               res.status(200).json({cached_products:JSON.parse(response)});
          }
     });
});


router.post("/add",async function(req,res){
     let products = await Product.create(req.body);     
     res.send(products);
});


router.get('/:id',function (req,res){

     client.get(`products.${req.params.id}`,async (err,response)=>{
          if(!response)
          {
               let prod=await Product.findOne({'_id':req.params.id}).lean().exec();
               console.log(prod);
               client.set(`products.${req.params.id}`,JSON.stringify(prod));
               res.status(201).json({"product":prod});
          }
          else
          {
               res.status(200).json({cached_product:JSON.parse(response)});
          }
     });
});



router.patch('/:id',function (req,res){

     client.get(`products.${req.params.id}`,async (err,response)=>{
          if(!response)
          {
               let prod=await Product.findOneAndUpdate(req.params.id,req.body).lean().exec();
               console.log(prod);
               client.del(`products.${req.params.id}`,(err,cb)=>{
                    console.error("Error"+err);
               })
               client.set(`products.${req.params.id}`,JSON.stringify(prod));
               res.status(201).json({"product":prod});
          }
          else
          {
                    res.status(201).json({"updated_cached_product":JSON.parse(response)});
               
               
               
          }
     });
});



router.delete('/:id',function (req,res){

     client.get(`products.${req.params.id}`,async (err,response)=>{
          if(!response)
          {
               let prod=await Product.findByIdAndDelete(req.params.id,req.body).lean().exec();
               console.log(prod);
               client.del(`products.${req.params.id}`,(err,cb)=>{
                    console.error("Error"+err);
               })
               client.set(`products.${req.params.id}`,JSON.stringify(prod));
               res.status(201).json({"product":prod});
          }
          else
          {
                    
              res.send("Deleted");
               
               
          }
     });
});


module.exports=router;