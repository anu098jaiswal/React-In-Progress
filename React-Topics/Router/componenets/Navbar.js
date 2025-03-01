import React from "react";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
//1.using  ahref bt it reload evrytime
//2.navlink as it contains isActive class
//3.useparams fetching id from url 
//4.usenavigation hook
//5.nested routing
const Navbar=()=>{
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    );
}
export default Navbar