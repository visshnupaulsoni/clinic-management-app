import { useState } from "react";
import { useLocation } from "react-router";
import '../styles/Table.css'
const AddPatient = (props) => {

    const _id = new URLSearchParams(useLocation().search).get('_id ');
    const patientNumber = new URLSearchParams(useLocation().search).get('patientNumber');
    const name = new URLSearchParams(useLocation().search).get('name');
    const age = new URLSearchParams(useLocation().search).get('age');
    const gender = new URLSearchParams(useLocation().search).get('gender');
    const city = new URLSearchParams(useLocation().search).get('city');

    const [localState, setLocalState] = useState({ _id: _id ? _id : "", patientNumber: patientNumber ? patientNumber : "", name: name ? name : "", age: age ? age : "", gender: gender ? gender : ["Male","Female"], city: city ? city : "" });

    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });

    };

    const onclickaddPatient = (e) => {
        e.preventDefault();
        // store.dispatch({ type: "ADD", playName: localState2.nAdd, playAge: localState2.aAdd, playAwards: localState2.awAdd })
        props.addPatient(localState);
    }

    const onclickeditPatient = (e) => {
        e.preventDefault();
        // store.dispatch({ type: "ADD", playName: localState2.nAdd, playAge: localState2.aAdd, playAwards: localState2.awAdd })
        props.editPatient(localState);
    }


    // const nEdit = props.mode === "edit" ? "disabled": "";

    return (
        <div style={{ border: "5px solid orange", backgroundColor: "skyblue", textAlign: "center" }}>
            {props.mode ? props.mode : ""}
            {// {props.patientData.addPatientSuccess ? props.patientData.addPatientSuccess:"" }
            }  <h1 style={{ color: "green", margin: "50px", textAlign: "center" }}><b>{props.mode==="edit" ? "EDIT PATIENT FORM":"ADD NEW PATIENT FORM" }</b></h1>
            <form id="frm1" name="form4" action="process.php">

                PATIENT NUMBER :{props.mode === "edit" ? <input type="text" name="patientNumber" value={localState.patientNumber} onChange={handleChange} required disabled /> : <input type="text" name="patientNumber" value={localState.patientNumber} onChange={handleChange} />}<br /><br />
                NAME :{props.mode === "edit" ? <input type="text" name="name" value={localState.name} onChange={handleChange} required disabled /> : <input type="text" name="name" value={localState.name} onChange={handleChange} required />}<br /><br />
                AGE :{props.mode === "edit" ? <input type="text" name="age" value={localState.age} onChange={handleChange} disabled /> : <input type="text" name="age" value={localState.age} onChange={handleChange} />}<br /><br />
                GENDER:{props.mode === "edit" ? <input type="radio" name="gender" value={localState.gender[0]} onChange={handleChange} disabled /> : <input type="radio" name="gender" value={localState.gender[0]} onChange={handleChange} />}Male
                {props.mode === "edit" ? <input type="radio" name="gender" value={localState.gender[1]} onChange={handleChange} disabled /> : <input type="radio" name="gender" value={localState.gender[1]} onChange={handleChange} />}Female <br></br><br></br>
                CITY : <input type="text" name="city" value={localState.city} onChange={handleChange} /><br /><br />
               
               {props.mode==="edit"? <button style={{height:"50Px",width:"200px"}} onClick={onclickeditPatient}> SAVE PATIENT</button>: <button style={{height:"50Px",width:"200px"}} onClick={onclickaddPatient}>ADD DOCTOR</button>}<br></br>

            </form>


        </div>
    )
}
export default AddPatient;