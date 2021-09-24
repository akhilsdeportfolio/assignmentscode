const express = require('express');
const userController = require('./src/controllers/users.controller')
const studentController = require('./src/controllers/students.controller');
const evalutationController = require('./src/controllers/evaluations.controller');
const connect = require('./src/config/db');







const app=express();


app.use(express.json());

app.use("/users",userController);
app.use("/students",studentController);
app.use("/evaluations",evalutationController);



app.listen(5000,async ()=>{
    await connect();
    console.log("listening on port 5000");
})