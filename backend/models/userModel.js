const mongoose =  require("mongoose");
const jwt =  require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name :{
      type :  String,
      required : [true, "Please Enter Your Name"],
      maxLenght:[30,"Name cannot Exceed 30 characters"],
      minLength:[4,"Name should have more than 4 characters"]
    },
    email : {
        type :  String,
        required : [true, "Please Enter Your Email"],
        unique:true,
       // validate:[validator.IsEmail,"Please Enter a valid Email"]
    },
    password : {
        type :  String,
        required :true,
        select:false
    },
    avatar:{
            public_id : {
                type : String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        },
    role:{
        type:String,
        default :"user"
    },
    score : {
        type : Number,
        default : 0,
    },
    state : {
        type : Number,
        default :0,
    },
    rank : {
        type : Number,
        default : -1,
    }, 
    createdAt:{
        type : Date,
        default:Date.now
    },
})


userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
      next();
    }
    this.password = await bcrypt.hash(this.password,10)
})

// JWT Token
userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
}

// Compare Password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
}



module.exports = mongoose.model("User" , userSchema);