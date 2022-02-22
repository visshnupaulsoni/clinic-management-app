import SearchPatient from './SearchPatient';
import { connect } from 'react-redux';

// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    return {
        patientData: store.reducer1
    }
}

const mapDispatchToProps = (dispatch) => {
    //console.log(nameVal);
    return {
    
        searchPatient: (nameObj) => dispatch({ type: "SEARCH_PATIENT_WITH_NAME", name: nameObj.name }),
        removePatient:(patiNumber) =>dispatch({type:"DELETE_PATIENT_WITH_NUMBER",patientNumber: patiNumber })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchPatient);