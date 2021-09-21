const express = require('express');
const mongoose = require('mongoose');


const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/web11");
}



const movieSchema = new mongoose.Schema({
        id:{type:Number, required:true},
        movie_name:{type:String, required:true},
        movie_genre:{type:String, required:true},
        production_year:{type:Number, required:true},
        budget:{type:Number, required:true}
});



const Movie = mongoose.model("movie",movieSchema);

const app = express();
app.use(express.json());




app.post("/addMovies",(req,res)=>{
    Movie.create(req.body).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err);
    })
});



//get all movies
app.get("/getMovies",(req,res)=>{

    Movie.find().lean().exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err);
    });


})


app.get("/getMovie/:id",(req,res)=>{

    Movie.findOne({_id:req.params.id}).lean().exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err);
    });


})


app.patch("/movie/:id",(req,res)=>{

        Movie.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec().then((data)=>{
            res.send(data);
        }).catch((err)=>{
            res.send(err);
        });

});


app.delete("/movie/:id",(req,res)=>{

    Movie.findByIdAndDelete(req.params.id,req.body).lean().exec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err);
    });

});




app.listen(5000,async ()=>{

    await connect();

    console.log("Listening on port 5000");
});