const connect = require('./config/db');
const app = require('./index');
const passport = require('./config/passport.config');


app.get("/",(req,res)=>{
     console.log(req);   
  
})
app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'] }));

app.get('/auth/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {    
     res.status(201).json({user:req.user.user,token:req.user.token});  
  });
app.listen("2345",async function(){
     await connect();
     console.log("Listening on the port 2345");
});

