require('dotenv').config(); //jab hum .config likhenge tabhi hum .env ka data use kar payenge
const app = require ('./src/app.js');
const connectDB = require ('./src/db/db.js');

connectDB();

app.listen (3000, ()=>{
    console.log("Server is running on port 3000");
})

