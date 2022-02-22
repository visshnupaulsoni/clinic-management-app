import mongoose from "mongoose";
const patientHistorySchema = new mongoose.Schema({
    description: {
        type:String,
        required: true,
    },
    
        month: {
        type: String,
        required: true,
      },
    
      year: {
          type:String,
          required: true,
      },

      PatientNumber: {
          type:Number,
          required: true,
      },
      
});
mongoose.model("PatientHistory",patientHistorySchema );
