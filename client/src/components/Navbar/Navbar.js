import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "../SignIn/SignIn";
import Axios from "axios";

const logOut = () => {
    Axios.post("/logout").then(data => console.log(data))
    localStorage.removeItem("user-name")
    localStorage.removeItem("user-id")
    localStorage.removeItem("child-id")
    localStorage.removeItem("child-name")
    window.location.replace("/")
}

function navbar(props) {
  return (
    <header className="navbar">
      <nav className="navigation">
        <div className="navbar-items">
          <ul>
            <li>
              {localStorage.getItem("user-id") ? (
                 <Link to="/home">Home <i className="fa fa-home"></i></Link> ): ( <Link to="/RegisterForm">Register</Link>
              )}
            </li>
            <li>
              {localStorage.getItem("user-id") ? (
               <h5> </h5> ) : ( <Link to="/SignIn">Sign In</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
        <div className="navbar-logo">
          <Link to="/">BabyNotes</Link>
        </div>
        <div className="logoutBtn">
          {localStorage.getItem("user-id") ? (
            <button className="btn carouselBtn2" onClick={logOut}>
            Log Out
              <i className="fa fa-power-off"></i>
            </button>
          ) : (
            <h5> </h5>
          )}
        </div>
    </header>
  );
};

export default navbar;
