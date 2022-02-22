const searchPatientReducer = (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "SEARCH_A_PATIENT_SUCCESSFUL":
            let newState = {...state, searchResults: action.json}
            newState.searchPatientSuccess = "SUCCESSFULLY ADDED THE PATIENT";
            console.log(newState);
            return newState;

            case "DELETE_PATIENT_RESULT":
                let newState1 = {...state, deleteResults: action.json}
                newState1.deletePatientSuccess = "SUCCESSFULLY DELETED THE PATIENT";
               console.log(newState1);
                return newState1;

                case "EDIT_A_PATIENT_SUCCESSFUL":
                    let newState2 = {...state}
                    newState2.editPatientSuccess = action.serverMsg;
                    console.log("inside add patient successful");
                    console.log(newState2);
                    return newState2;


        default:
            return state;

    }
}

export default searchPatientReducer;
