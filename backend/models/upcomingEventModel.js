const mongoose = require("mongoose");
const  upcomingEventsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Please enter event name"],
        trim:true
    },
    description : {
       type : String,
       required : [true, "Please enter the description"]
    },
    images :[
        {
         public_id : {
             type : String,
             required: true
         },
         url:{
             type:String,
             required:true
         }
        }
    ],
    date : {
        type : Date,
        required : [true , "Please Enter the Date of the Event"],
    },
    category : {
        type : String,
        required : [true, "Please Enter the genre of the Event"],
    }
});

module.exports =  mongoose.model("UpcomingEvents" , upcomingEventsSchema);
