const connect = require('./config/db');
const app = require('./index');


app.listen("5000",async function(){
     await connect();
     console.log("Listening on the port 5000");
});