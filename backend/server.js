const e = require('express');
const express = require('express'); 
const   app = express();
const data = require('./db.json');
app.listen(5000,()=>{
    console.log("Listening on port " + 5000)
});


app.use(middle);
app.use(express.json());


app.get("/",function(req,res,next){


        let db=data;




        console.log(db);
        db=db.map((title)=>{
            return title.author;
        });


        res.send({api_requested_by:req.name,users:db});




});


app.post("/books",function(req,res,next){


    let db=data;



    db.push(req.body);

    console.log(db);
    db=db.map((title)=>{
        return title.author;
    });




    res.send({api_requested_by:req.name,users:db});




});



app.get("/books/:id",function(req,res,next){
    
    let db=data.filter((item)=>{
            return item.id==req.params.id;
    });

    res.send({api_requested_by:req.name,user:db[0].author});
})



app.patch("/books/:id",function(req,res,next){
    

    console.log(req.body);

    let db=data.filter((item)=>{
            return item.id==req.params.id;
    });
    db[0].author=req.body.author;
    db[0].title=req.body.title;

    res.send({api_requested_by:req.name,user:db[0],message:"successfully updated the author details in memory"});
})



app.delete("/books/:id",function(req,res,next){
    

    console.log(req.body);

    let index ;
    data.forEach((el,i)=>{
            if(el.id==req.params.id) 
                 index=i;
    });


    let removed=data.splice(index,1);

    
    res.send({api_requested_by:req.name,user:data,removed});
})






function middle(req,res,next){
    req.name="akhil Kamsala";
    next();
}

