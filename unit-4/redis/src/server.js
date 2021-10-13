const app = require('./app');
const connect = require('./config/db');

app.listen(5000,async()=>{
     await connect();
     console.log("Listening on the port 5000");
})