import AddPatient from './AddPatient';
import { connect } from 'react-redux';

// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    console.log(store.reducer2);
    console.log("inside reducer2");
    return {
        patientData: store.reducer2
    }
}

const mapDispatchToProps = (dispatch) => {
    //console.log(nameVal);
    return {
    
        addPatient: (patientObj) => dispatch({ type: "ADDED_A_PATIENT_BACKEND", patient:patientObj}),
        editPatient: (patientObj) => dispatch({ type: "EDIT_A_PATIENT_BACKEND", patient:patientObj}),
   
         }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);