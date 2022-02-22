import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import '../models/Patient.js';
//import '../models/Doctor.js';
//import '../models/Appointment.js';
//import '../models/Speciality.js';
//import '../models/Timeslot.js';



import  SimpleNodeLogger from 'simple-node-logger';
        const opts = {
                logFilePath:'mylogfile.log',
                timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
        };
const log = SimpleNodeLogger.createSimpleLogger( opts );

const connectionStr = `mongodb://localhost:27017/clinicbd`;
mongoose.connect(connectionStr)
    .then(() => {
        console.log(`connected to the mongodb database`);
        log.info(`connected to the mongodb`);
    })
    .catch((err) => {
        console.log(err.message);
        log.err(err.message)
    });

var app = express();

app.use(express.static('public'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//const Doctors = mongoose.model("Doctors");
//const Appointments = mongoose.model("Appointments");
const Patients =mongoose.model("Patients");
//const PatientHistory = mongoose.model("patientHistory");
//const specialities = mongoose.model("Specialities");
//const timeslots = mongoose.model("Timeslots");

app.get('/',(req,res)=>{
    res.send("welcome to clinic management system");
});


//get all patients
app.get('/patients', (req, res) => {
    Patients.find({}, function (err, docs) {
        console.log (docs);
        res.json(docs);
       // log.info('searched for all patients');

    });
});




//get  patients by name
app.get('/patients/:name', (req, res) => {
   // log.info("searched patient by name",+req.params.name);
    const dName = req.params.name;
    Patients.find({ name: dName }, function (err, docs) {
        res.json(docs);

    });
});


//post a patient
app.post('/patients/add', (req, res) => {
   // log.info("add patient ",+req.body);
    console.log(req.body);
    Patients.create(req.body).then((ans) => {
        console.log("New Patient Inserted")
        res.status(200).send({ msg: "patient added successfully" });
       // log.info("patient add successfully");
    }).catch((err) => {
        console.log(err.Message);
        res.status(400).send({ msg: "patient added failed" });
        //log.info("patient add failure");
    
    });
});

//delete a patient

app.get('/patients/delete/:name', (req, res) => {
    //log.info("delete patient ",+req.params.name);
    Patients.deleteOne({ name: req.params.name }).then((ans) => {
        console.log("one patient deleted")
        res.status(200).send({ msg: "patient removed successfully" });
      // log.info('patient removed successfully');
    }).catch((err) => {
        console.log(err.Message);
        //log.info('patient removed failed');
    });

});
//delete patient by patientNumber
app.get('/patients/delete/patientNumber/:patientNumber', (req, res) => {
   //log.info('delete patient by patientNumber',+req.params.patientNumber);
    Patients.deleteOne({ patientNumber: req.params.patientNumber }).then((ans) => {
        console.log("one patient deleted")
        res.status(200).send({ msg: "patient removed successfully" });
       // log.info('patient removed successfully');
    }).catch((err) => {
        console.log(err.Message);
        res.status(400).send({ msg: "patient delete failed" });
       //log.info('patient removed failed');
    });

});

//delete patient by id

app.post('/patients/delete/:_id', (req, res) => {
   // log.info('delete patient by id',+req.params.id);
    Patients.findByIdAndDelete(req.params._id).then((ans) => {
        console.log("one patient deleted")
        res.status(200).send({ msg: "patient removed successfully" });
        //log.info('patient removed successfully');
    }).catch((err) => {
        console.log(err.Message);
       // log.info('patient removed failed');
    });

});

//edit a patient by its id

app.post('/patients/edit/:id', (req,res) => {
   // log.info('edit patient by id',+req.params.id,req.body);
    console.log(req.body);
    Patients.findByIdAndUpdate(req.params.id,req.body).then((ans) => {
        console.log("one patient updated")
        res.status(200).send({ msg: "patient updated successfully" });
       // log.info('patient updated successfully');
    }).catch((err) => {
        console.log(err.Message);
       // log.info('patient updated failed');
       console.log("one patient failed")
    });

});





export default app;