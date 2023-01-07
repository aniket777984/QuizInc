const ErrorHandler = require('../utils/errorhandler');


module.exports = (err,req,res,next)=>{
  err.statusCode = err.statusCode || 500;
  err.message  = err.message || "Internal Server Error";

  // Wrong MongoDb Id error
   if(err.name === "CastError"){
     const message = `Resource not found ,  Invalid : ${err.path}`;
     err= new ErrorHandler(message , 400);
   }

    // Mongoose Duplicate key error
    if(err.code === 11000){
      const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
      err= new ErrorHandler(message , 400);
    }

   // Wrong JWT token
  
    if(err.name === "JsonWebTokenError"){
      const message = `Json Web Token is Inavid , Try again`;
      err= new ErrorHandler(message , 400);
    }

    // JWT expire error
    
    if(err.name === "TokenExpiresError"){
      const message = `Json Web Token is Expired Try again`;
      err= new ErrorHandler(message , 400);
    }

  res.status(err.statusCode).json({
      success : false , 
      message : err.message
  });
}
