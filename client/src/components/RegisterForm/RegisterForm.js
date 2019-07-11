import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./RegisterForm.css";
// import Landing from "../../pages/Landing";
import axios from "axios";

class RegisterForm extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
    // isValid: localStorage.getItem("user")
  };

  handleChange = event => {
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstName,
      lastname: this.state.lastName
    };
    axios.post('/user/register', user)
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.replace("/SignIn")
      })

    // console.log("The form was submitted with the following data:");
    // console.log(this.state);
    // localStorage.setItem("user", this.state.email);
    // this.setState({
    //   inValid: true
    // });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="jumbotron">
              <h1 className="jumboBanner">Sign Up</h1>
            </div>
          </div>
          <div className="col-md-6 registerPage">
            {/* <Landing /> */}
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="FormField__Input"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="Last Name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="FormField__Input"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.LastName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="FormField__Input"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="FormField__Input"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="FormField">
                  {this.state.isValid ? <Redirect to="/" /> : null}
                  <button
                    className="FormField__Button"
                    onClick={this.submitForm}
                  >
                    <h3>Register <i className="fa fa-user-plus"></i></h3>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
