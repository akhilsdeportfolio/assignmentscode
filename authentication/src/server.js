const connect = require('./config/db');
const app = require('./index');


app.listen("2345",async function(){
     await connect();
     console.log("Listening on the port 2345");
});