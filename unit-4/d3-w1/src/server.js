const app = require('./index');
const connect = require('./config/db');
const userController = require("./controllers/user.controller");




app.use('/users',userController);

app.listen(5000,async()=>{
     await connect();
     console.log("Listening on port 5000");
})

