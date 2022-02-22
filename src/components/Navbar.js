import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar =()=>{
    return(
     <div>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/">Home</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/patients/search">Search</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/patients/add"}>Add</NavLink>
       
        
       
     </div>   
    )
}
export default Navbar;