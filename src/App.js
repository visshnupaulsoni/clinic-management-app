//import logo from './logo.svg';
import './App.css';
import store from './store/myStore';
import { Provider } from 'react-redux';
import NopageFound from './components/NopageFound';
import { BrowserRouter, Routes, Route, NavLink, } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPatientContainer from './components/SearchPatientContainer';
import AddPatient from './components/AddPatient';
import EditPatient from "./components/EditPatient";
import AddPatientContainer from './components/AddPatientContainer';


function App() {
  return (
      <Provider store={store}>
    
      <BrowserRouter>

        <Routes>

         <Route path="/" element={<Home/>} />
         
         <Route path="/patients/search" element={<SearchPatientContainer  />} />
         <Route path="/patients/add" element={<AddPatientContainer  mode="add"/>} />
         <Route path="/patients/edit" element={<AddPatientContainer  mode="edit"/>} />
         <Route path="*" element={<NopageFound />} />


         

        </Routes>
      </BrowserRouter>

      </Provider>

    // </div>
  );
}


function Home() {
  return (
    <h2>
    <Navbar/> 
    <br></br>
    <br></br>
    <center>WELCOME TO CLINIC MANAGEMENT SYSTEM</center>

    </h2>
    )
  };

 

export default App;
