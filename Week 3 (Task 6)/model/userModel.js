import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    Title:{
        type:String,
        required: true
    },
    Completed:{
        type:Boolean,
        default: false
    }
});

export default mongoose.model("Todo", TodoSchema);