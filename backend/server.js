const app = require('./app');
const connectDatabase = require("./config/database");
const cloudinary =  require("cloudinary");

// Handlng uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the server due to uncaught rejection");
    process.exit(1);
})

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}
  


let port = process.env.PORT;

// Connecting to database
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
  

const server =  app.listen( port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})



// Unhandled Promise Rejection
process.on('unhandledRejection' , (err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the server due to Unhandles promise rejection");
    server.close(()=>{
        process.exit(1);
    })
})