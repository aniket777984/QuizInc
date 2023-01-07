const Question = require("../models/questionModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create a question
exports.createQuestion = catchAsyncErrors(async (req, res, next) => {
  const question = await Question.create(req.body);
  res.status(200).json({
    success: true,
    question,
  });
});

// Get All Questions
exports.getAllQuestions = catchAsyncErrors(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).json({
    success: "true",
    questions,
  });
});

// Get All Questions (Admin)
exports.getAdminQuestions = catchAsyncErrors(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).json({
    success: true,
    questions,
  });
});

// Get Particular Quesion Details

exports.getQuestionDetails = catchAsyncErrors(async (req, res, next) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    return next(new ErrorHandler("Question Not Found", 404));
  }
  res.status(200).json({
    succes: true,
    question,
  });
});

exports.deleteQuestion = catchAsyncErrors(async (req, res, next) => {

  const question = await Question.findById(req.params.id);

  if (!question) {
    return next(new ErrorHandler("Question not found", 404));
  }

  await question.remove();

  res.status(200).json({
    success: true,
    message: "Question Deleted Successfully",
  });
});

// Update A  question -  Admin
exports.updateQuestion = catchAsyncErrors(async(req,res,next)=>{

    let question = await Question.findById(req.params.id);

    if(!question){
        return next(new ErrorHandler("Question Not Found" ,  404));
    }
    if(req.body.score){
        question.score = req.body.score;
    }
    if(req.body.category){
        question.category  = req.body.category;
    }

    await question.save();

    res.status(200).json({
        success  :true,
        question,
    })
})