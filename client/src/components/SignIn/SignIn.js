import React, { Component } from "react";
import API from "../../util/API";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
    // isValid: localStorage.getItem("user")
  };

  handleChange = event => {
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log("The form was submitted with the following data:");
    console.log(this.state);
    API.loginUser({
      email: this.state.email,
      password: this.state.password
    }).then(data => {
      console.log("this is the data back -------- ", data.data.user);
      // this.props.setUser(data.data)
      if (!data.data.error) {
        console.log("ay");
        localStorage.setItem("user-name", data.data.user.firstname);
        localStorage.setItem("user-id", data.data.user.id);
        window.location.replace("/home");
      } else {
        alert("Wrong login");
      }
    });

    // const data = await API.getAuthId();
    // App.setUserLogin("user", this.state.email);
    // App.setUserLogin("user", this.state.email);

    this.setState({
      isValid: true
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="jumbotron">
              <h1 className="jumboBanner">Sign In</h1>
            </div>
          </div>
          <div className="col-md-6 registerPage">
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="FormField__Input"
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="FormField">
                  {this.state.isValid ? <Redirect to="/home" /> : null}
                  <button
                    className="FormField__Button mr-20"
                    onClick={this.handleSubmit}
                  >
                    <h3>
                      Sign In <i className="fa fa-user-circle" />
                    </h3>
                  </button>
                </div>
              </form>
            </div>
            {/* <SignIn setUser={this.props.setUser} user={this.props.user} history={this.props.history} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
