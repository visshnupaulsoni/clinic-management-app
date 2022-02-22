import mongoose from "mongoose";
const timeslotsSchema = new mongoose.Schema({
    Speciality: {
        type:String,
        required: true,
    },
         
});
mongoose.model("Timeslots",timeslotsSchema );