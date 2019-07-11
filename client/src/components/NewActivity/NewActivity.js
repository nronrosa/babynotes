// import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
import API from "../../util/API";

class NewActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 2,
      date: "",
      startTime: "",
      endTime: "",
      observations: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: event.target.value
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    let activityData = {
      actList_Id: this.state.type,
      date: this.state.date,
      starttime: this.state.startTime,
      endtime: this.state.endTime,
      description: this.state.observations,
      ChildId: localStorage.getItem("child-id")
    };
    this.createNewActivity(activityData);
    window.location.replace("/child", this.props);
  };

  createNewActivity = data => {
    API.postOneActivity(data);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 jumbotron4">
            <div>
              <h1 className="jumboBanner4">New Activity</h1>
            </div>
          </div>
          <div className="col-md-6 newActivityPage">
            {/* <div className="FormCenter"> */}
            <form className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="type">
                  Activity
                </label>
                <select
                  id="actList"
                  className="FormField__Input"
                  placeholder="Type of activity"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleChange}
                >
                  <option value="2">Sleep</option>
                  <option value="3">Diaper Change</option>
                  <option value="4">Feeding</option>
                </select>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="FormField__Input"
                  placeholder="Date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="start">
                  Start
                </label>
                <input
                  type="time"
                  id="start"
                  className="FormField__Input"
                  placeholder="Start"
                  name="startTime"
                  value={this.state.startTime}
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="end_time">
                  End Time
                </label>
                <input
                  type="time"
                  id="end"
                  className="FormField__Input"
                  placeholder="End"
                  name="endTime"
                  value={this.state.endTime}
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="observations">
                  Observations
                </label>
                <input
                  type="text"
                  id="observations"
                  className="FormField__Input"
                  placeholder="Observations"
                  name="observations"
                  value={this.state.observations}
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <button
                  className="FormField__Button"
                  onClick={this.handleSubmit}
                >
                  <h3>Add New Activity</h3>
                </button>
              </div>
            </form>
          {/* <div className="centered"> */}
            <button
              className="FormField__Button2Cancel"
              onClick={function() {
                window.location.replace("/child");
              }}
            >
              <h3>Cancel</h3>
            </button>
          </div>
        {/* </div> */}
            {/* </div> */}
          </div>
      </div>
    );
  }
}
export default NewActivity;
