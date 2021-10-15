const express = require('express');
const app = express();
const {signin,signup}=require('./controllers/authController');
const userController=require('./controllers/userController');


app.use('/signin',signin);
app.use('/signup',signup);
//app.use('/users',userController);

module.exports=app;