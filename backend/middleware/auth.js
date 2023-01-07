const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAutheticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please  Login to access the resource", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);
  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role  : ${req.user.role} is not allowed to acces this resource`,
          403
        )
      );
    }
    next();
  };
};

exports.authorizeState = catchAsyncErrors(async (req,res,next) => {
  const state =  req.user.state;
  if(state == 1)
  {
    return next(new ErrorHandler("You have already attepted the Current Ongoing Quiz", 403));
  }
  next();
});
