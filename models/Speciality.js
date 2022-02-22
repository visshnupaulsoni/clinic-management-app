import mongoose from "mongoose";
const specialitiesSchema = new mongoose.Schema({
    Speciality: {
        type:String,
        required: true,
    },
    
        
      
});
mongoose.model("Specialities",specialitiesSchema );