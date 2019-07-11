import React, { Component } from "react";
import Childcard from "../components/Childcard/Childcard";
import "./home.css";
import API from "../util/API";
import axios from "axios";

class Home extends Component {
  state = {
    date: "",
    title: "",
    notes: ""
  };

  componentDidMount() {
    localStorage.removeItem("child-id");
    localStorage.removeItem("child-dob");
    localStorage.removeItem("child-name");
  }


  handleClick = () => {
    API.getAllActivities().then(res =>
      this.setState({
        data: res.data
      })
    );
  };

  newChild = () => {
    console.log("New Child");
    var newChild = {
      name: "Default Name",
      dob: new Date(),
      UserId: parseInt(localStorage.getItem("userId"))
    };
    axios
      .post("/child", newChild)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container-fluid new-image">
        <div className="row">
          <div className="col-md-12 page-title">
            <h1 className="parentTitle">Welcome, {localStorage.getItem("user-name")}</h1>
            <div className="addChildBtn">{localStorage.getItem("user-id") ? <button className="btn childBtn" onClick={function () { window.location.replace("/createChild") }}>Add a child <i className="fa fa-child" /></button> : <h5>Please sign in </h5>}</div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 childCards">
              <Childcard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
