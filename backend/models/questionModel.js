const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Please enter the Question"],
  },
  option1 : {
    type  : String,
    required : [true , "Please Enter the option1"],
  },
  option2 : {
    type  : String,
    required : [true , "Please Enter the option2"],
  },
  option3 : {
    type  : String,
    required : [true , "Please Enter the option3"],
  },
  option4 : {
    type  : String,
    required : [true , "Please Enter the option4"],
  },
  correct_answer: {
    type: String,
    required: [true, "Please Enter the correct answer"],
  },
  score: {
    type: Number,
    required: [true, "Please enter the score for the question"],
  },
  category: {
    type: String,
    required: [true, "Please Enter the category of the Question"],
  },
});

module.exports = mongoose.model("Question", questionSchema);
