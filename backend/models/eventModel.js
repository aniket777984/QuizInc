const mongoose = require("mongoose");
const EventsSchema = new mongoose.Schema({
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
    category : {
        type : String,
        required : [true, "Please Enter the genre of the Event"],
    }
});

module.exports =  mongoose.model("Events" , EventsSchema);
