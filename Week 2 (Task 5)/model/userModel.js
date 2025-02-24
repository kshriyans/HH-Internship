import mongoose from "mongoose"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    role: {
            type: String,
            default: false,
            enum:["admin","user"]
    }
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, role: this.role}, process.env.JWT_PRIVATE_KEY);
    return token;
}

export default mongoose.model("users", userSchema);