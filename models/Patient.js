import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
      },
    
        city: {
        type: String,
        required: true,
      },
    
      gender: {
          type:String,
          required: true,
      },

      patientNumber: {
          type:Number,
          required: true,
          unique:true
      },
      
});
mongoose.model("Patients",patientSchema );