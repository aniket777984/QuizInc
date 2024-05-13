const express = require("express");
const app =  express();
const cookieParser =require('cookie-parser') 
const errorMiddleware = require('./middleware/error')
const bodyParser  =  require("body-parser");
const path = require("path");
const fileUpload = require("express-fileupload");


// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}


app.use(express.json({limit : "50mb"}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({limit : "50mb" , extended : true}));
app.use(fileUpload());

// Route import
const user = require("./routes/userRoute");
const question = require("./routes/questionRoute");
const upcomingEvent = require("./routes/upcomingEventRoute");
const sponser = require("./routes/sponserRoute");
const event = require("./routes/eventRoute"); 

app.use("/api/v1" , user);
app.use("/api/v1" , question);
app.use("/api/v1" , upcomingEvent);
app.use("/api/v1" , sponser);
app.use("/api/v1" , event);

app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));
});


// Middleware for Error
app.use(errorMiddleware);

module.exports = app;