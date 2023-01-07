const Event = require("../models/eventModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");

// create Event

exports.createEvent = catchAsyncErrors(async (req, res, next) => {
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
  
    const event = await Event.create(req.body);
    res.status(200).json({
      success: true,
      event,
    });
  });
  
  // get All UpcomingEvents
  exports.getAllEvents = catchAsyncErrors(async (req, res, next) => {
    const events = await Event.find();
    res.status(200).json({
      success: true,
      events,
    });
  });
  
  // get a specific Event details
  exports.getEventDetails = catchAsyncErrors(async (req, res, next) => {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return next(new ErrorHandler("Event not found", 404));
    }
    res.status(200).json({
      succes: true,
      event,
    });
  });

// Delete A Event
exports.deleteEvent = catchAsyncErrors(async (req, res, next) => {
    const event = await Event.findById(req.params.id);
  
    if (!event) {
      return next(new ErrorHandler("Event not found", 404));
    }
  
    // Deleting Images From Cloudinary
    for (let i = 0; i < event.images.length; i++) {
      await cloudinary.v2.uploader.destroy(event.images[i].public_id);
    }
  
    await event.remove();
  
    res.status(200).json({
      success: true,
      message: "Event Deleted Successfully",
    });
  });
  