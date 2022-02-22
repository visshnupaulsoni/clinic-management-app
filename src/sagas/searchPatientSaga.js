import { put, takeLatest, all } from "redux-saga/effects";
// we need to code generator function for saga like this

function* searchPatient(action) {
  console.log("Inside patient saga");
  console.log(action);
  const json = yield fetch("http://localhost:8000/patients/" + action.name).then((response) =>

    response.json()
  );

  console.log("response from backend");
  console.log(json);
  yield put({ type: "SEARCH_A_PATIENT_SUCCESSFUL", json: json });

}
function* actionWatcher() {
  yield takeLatest("SEARCH_PATIENT_WITH_NAME", searchPatient);
}



//delete doctor saga
function* deletePatient(action) {
  console.log("Inside patient saga delete");
  console.log(action);
  const json = yield fetch("http://localhost:8000/patients/delete/patientNumber/" + action.patientNumber).then((response) =>

    response.json()
  );

  console.log("response from backend");
  console.log(json);
  yield put({ type: "DELETE_PATIENT_RESULT", json: json });

}
function* actionWatcher2() {
  yield takeLatest("DELETE_PATIENT_WITH_NUMBER", deletePatient);
  console.log("get 2 data");
}



//add a patient
function* addNewPatient(action) {
  var bodyContent = {
    patientNumber: action.patient.patientNumber,
    name: action.patient.name,
    age: action.patient.age,
    gender: action.patient.gender,
    city: action.patient.city,
  };
  var stringifiedBody = JSON.stringify(bodyContent);
  const serverResponse = yield fetch("http://localhost:8000/patients/add", {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8"
    },
  }).then((res) => res.json());
  yield put({ type: "ADD_A_PATIENT_SUCCESSFUL", serverMsg: serverResponse.msg, });
}

function* actionWatcher1() {
  yield takeLatest("ADDED_A_PATIENT_BACKEND", addNewPatient);
}



//edit patient
function* editPatient(action) {
  var bodyContent = {

    gender: action.patient.gender,

  };
  var stringifiedBody = JSON.stringify(bodyContent);
  const serverResponse = yield fetch("http://localhost:8000/patients/edit/"+action.patient._id, {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8"
    },
  }).then((res) => res.json());
  yield put({ type: "EDIT_A_PATIENT_SUCCESSFUL", serverMsg: serverResponse.msg, });
}

function* actionWatcher3() {
  yield takeLatest("EDIT_A_PATIENT_BACKEND", editPatient);
}

// for all the above sagas we need to create root saga
export default function* rootSaga() {
  yield all([
    actionWatcher(),
    actionWatcher1(),
    actionWatcher2(),
    actionWatcher3(),
  ]);
}