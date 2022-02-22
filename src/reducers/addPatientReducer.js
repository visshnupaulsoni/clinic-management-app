const addPatinetReducer = (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {

        case "ADD_A_PATIENT_SUCCESSFUL":
            let newState = {...state, addResults: action.serverMsg}
            newState.addPatientSuccess = action.serverMsg;
            console.log("inside add patient successful");
            console.log(newState);
            return newState;

            
    

            default:
                return state;
    };
}
export default addPatinetReducer;