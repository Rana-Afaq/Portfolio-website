import mongoose from "mongoose";

const { Schema } = mongoose;

const ProjectSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },



});

export default mongoose.model("Project" , ProjectSchema);
