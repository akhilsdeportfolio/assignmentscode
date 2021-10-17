const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();
const User =require('../models/user.model');
const jwt = require('jsonwebtoken');
const {newtoken}= require('../controllers/authController');
const uuid = require('uuid');



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:2345/auth/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
          
          let user= await User.findOne({email:profile?._json?.email});
          if(!user)
          {
           
               let createUser = User.create({
                    email:profile?._json?.email,
                    password:uuid.v4(),
                    name:profile?._json?.name
               });
          }          
          let token=newtoken(user);      
          
          return done(null, {user,token});                    

     }
));


module.exports=passport;