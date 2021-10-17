const express = require('express');
const app = express();
const {signin,signup}=require('./controllers/authController');
const userController=require('./controllers/userController');
const protect = require('./middlewares/protect');
const authorize = require('./middlewares/authorize');
const passport = require('./config/passport.config');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/signin',signin);
app.use('/signup',signup);
app.use('/users',protect,authorize(["admin"]),userController);
app.use(passport.initialize())
passport.serializeUser((user,done)=>{
     done(null,user);
});
passport.deserializeUser((user,done)=>{
     done(null,user);
})
module.exports=app;