import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Table.css'
const SearchPatinet = (props) => {

    const [localState, setLocalState] = useState({ name: "" });

    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });
        console.log(setLocalState);
        console.log(e.target.value);
        console.log(e.target.name);
    };

    const searchPatient = (e) => {
        e.preventDefault();
        // store.dispatch({ type: "ADD", playName: localState2.nAdd, playAge: localState2.aAdd, playAwards: localState2.awAdd })
        props.searchPatient(localState);
    }

    //const [localState1, setLocalState1] = useState({ patientToRemove: "" });
    // const handleChange1 = (e) => {
    //     e.preventDefault();
    //     setLocalState1({ ...localState1, patientToRemove: e.target.value });

    //};
    const removePatient = (e, patientNum) => {
        e.preventDefault();
        props.removePatient(patientNum)

    }


    return (
        <div>
            <h1 style={{ margin: "50px" }}><b>SEARCH BY</b></h1>
            <form style={{ margin: "50px" }}>
                <label> PATIENT NAME : </label>
                <input type="text" name="name" value={localState.name} onChange={handleChange} /><br /><br />
                <button onClick={searchPatient}>SEARCH</button><hr />
                <table style={{ width: "100%" }}>
                    <tr>
                        <th>PATIENT NUMBER</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                        <th>CITY</th>
                        <th>EDIT ACTION</th>
                        <th>DELETE ACTION</th>
                    </tr>
                    {props.patientData.searchResults ? props.patientData.searchResults.map((item, key) => <tr><td> {item.patientNumber}</td><td> {item.name}</td><td> {item.age}
                    </td><td>{item.gender} </td><td> {item.city}</td><td> <Link to={{pathname:"/patients/edit?patientNumber="+item.patientNumber+"&_id="+item._id+"&name="+item.name+"&age="+item.age+"&gender="+item.gender+"&city="+item.city}}>EDIT</Link>
        </td><td><button onClick={(e) => removePatient(e, item.patientNumber)}>DELETE</button></td></tr>) : ""}

                    {props.patientData.deletePatientSuccess ? props.patientData.deletePatientSuccess : ""}
                </table>


            </form>
        </div>
    )
}

export default SearchPatinet;