const express = require('express');
const app = express();
const {signin,signup}=require('./controllers/authController');
const userController=require('./controllers/userController');
const protect = require('./middlewares/protect');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/signin',signin);
app.use('/signup',signup);
app.use('/users',protect,userController);

module.exports=app;