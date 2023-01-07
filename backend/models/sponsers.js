const mongoose = require("mongoose");

const  sponsersSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Please enter sponser name"],
        trim:true
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
    categorySponser : {
        type : String,
        required : [true, "Please Enter the category of sponser"],
    }
});

module.exports =  mongoose.model("Sponsers" , sponsersSchema);
