const Sponser = require("../models/sponsers");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");

// Create Upcoming Event
exports.createSponser = catchAsyncErrors(async (req, res, next) => {

    let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }



    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "QuizInc",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;

  const sponser = await Sponser.create(req.body);
  res.status(200).json({
    success: true,
    sponser,
  });
});

// Get All Sponsers
exports.getAllSponsers = catchAsyncErrors(async (req, res, next) => {
  const sponsers = await Sponser.find();
  res.status(200).json({
    success: true,
    sponsers,
  });
});

// Delete A Sponser 
exports.deleteSponser = catchAsyncErrors(async (req, res, next) => {
  const sponser = await Sponser.findById(req.params.id);

  if (!sponser) {
    return next(new ErrorHandler("Sponser not found", 404));
  }

  // // Deleting Images From Cloudinary
  for (let i = 0; i < sponser.images.length; i++) {
    await cloudinary.v2.uploader.destroy(sponser.images[i].public_id);
  }

  await sponser.remove();

  res.status(200).json({
    success: true,
    message: "Sponser Deleted Successfully",
  });
});
