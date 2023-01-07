const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
// const sendEmail = require("../utils/sendEmail");
// const crypto = require("crypto");
const ApiFeatures = require("../utils/apiFeature");
const cloudinary =  require("cloudinary");

// Regiter a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

  let images = {};
  images = req.body.avatar;

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "QuizInc",
  });
  
  let imageLink = {};

  imageLink = {
    public_id: result.public_id,
    url: result.secure_url,
  };
  req.body.avatar = imageLink;

  const user = await User.create(req.body);

  sendToken(user, 201, res);
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {

  const { email, password } = req.body;

  // Checking if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or Password", 401));
  }

  const IsPasswordMatched = await user.comparePassword(password);
  if (!IsPasswordMatched) {
    return next(new ErrorHandler("Invalid email or Password", 401));
  }
  sendToken(user, 200, res);
});

// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out Successfully",
  });
});

// Get user detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {

  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Serach a user
exports.searchUser = catchAsyncErrors(async(req,res,next) =>{

  const apiFeature = new ApiFeatures(User.find(), req.query).search();

  const users = await apiFeature.query;

  res.status(200).json({
    success :"true",
    users,
  });

})

// Delete Own Account
exports.deleteAccount = catchAsyncErrors(async (req,res,next)=>{

  const user = await User.findById(req.user._id);

  await user.remove();
  res.status(200).json({
    success: true,
    message: "Your Account deleted SuccesFully",
  });
})

// Update Password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {

  const user = await User.findById(req.user.id).select("+password");

  const IsPasswordMatched = await user.comparePassword(req.body.oldPassword);
  if (!IsPasswordMatched) {
    return next(new ErrorHandler("Old Password is Incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password doesnt match", 400));
  }
  user.password = req.body.newPassword;
  await user.save();

  sendToken(user, 200, res);
});

// Update User Profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  if (req.body.avatar !== "") {
    const user = await User.findById(req.user.id);

    const imageId = user.avatar.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "QuizInc",
      width: 150,
      crop: "scale",
    });

    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Get all users
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {

  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});


// Get  single User Details (admin router)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {

  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User doesnt exist with id ${req.params.id}`, 400)
    );
  }
  res.status(200).json({
    success: true,
    user,
  });
});

// Update User Role(admin or user)(admin router)
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {

  const newUserData = {
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// Reset the state for all the users
exports.updateStateAndScore = catchAsyncErrors(async(req,res,next)=>{
  
  const users = await User.find();
  users.forEach(async(user)=>{
    user.state=0;
    user.score=0;
    user.rank=-1;
    await user.save();
  })
  res.status(200).json({
    success : true,
    users,
  })
});

//Update the score
exports.updateScore = catchAsyncErrors(async(req,res,next)=>{
  const user = await User.findById(req.user.id);
  
  const {mark} = req.body;
  user.score = user.score + mark;
  await user.save();

  res.status(200).json({
    success : true,
    user,
  })

});

//Reset Score of all the users
exports.resetScore = catchAsyncErrors(async(req,res,next)=>{
  const users = await User.find();

  users.forEach(async(user)=>{
    user.score =0;
    await user.save();
  })

  res.status(200).json({
    sucess:true,
    users,
  })
})


//Reset the state of Login user
exports.updateState = catchAsyncErrors(async(req,res,next)=>{
  const user = await User.findById(req.user.id);
  user.state =1;
  await user.save();
  res.status(200).json({
    success : true,
    user,
  })
});

// Display the LeaderBoard
exports.displayLeaderBoard = catchAsyncErrors(async(req,res,next)=>{

  const users = await User.find({"state": 1 }).sort({"score" : -1});


  users.forEach(async (user,index)=>{
    user.rank = index+1;
    await user.save();
  });

  const apiFeature = new ApiFeatures(User.find({"state" : 1}).sort({"score" : -1}) , req.query).search()
  const leaderboardUsers = await apiFeature.query;
  
  res.status(200).json({
    sucess : true,
    leaderboardUsers,
  })
})

// Delete User (Admin)
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {

  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User does not exit with id ${req.params.id}`)
    );
  }

  await user.remove();
  res.status(200).json({
    success: true,
    message: "User deleted SuccesFully",
  });
});