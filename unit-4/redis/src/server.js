const app = require('./app');
const connect = require('./config/db');
const {client,redis} = require('./config/redis');


app.listen(5000,async()=>{
     await connect();
     console.log("Listening on the port 5000");
})