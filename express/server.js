const express = require('express'); 
const   app = express();
const data = require('./users.json');
app.listen(5000,()=>{
    console.log("Listening on port " + 5000)
});



app.get('/',(req,res)=>{
    res.send("Hello from express");
})

app.get('/users',(req,res)=>{



    res.send({users:data});


});