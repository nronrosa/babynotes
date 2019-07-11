import React, { Component } from "react";
import API from "../../util/API";

class JournalEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1,
      date: "",
      title: "",
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
      title: this.state.title,
      description: this.state.notes,
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
          <div className="col-md-6 jumbotron5">
            <div>
              <h1 className="jumboBanner5">Journal Entry</h1>
            </div>
          </div>
          <div className="col-md-6 newJournalPage">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="date">
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  className="FormField__Input"
                  placeholder="Date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="FormField__Input"
                  placeholder="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="notes">
                  Notes
                </label>
                <input
                  type="text"
                  id="notes"
                  className="FormField__Input"
                  placeholder="Notes"
                  name="notes"
                  value={this.state.notes}
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <button className="FormField__Button">
                  <h3>Add Note</h3>
                </button>
          <button
            className="FormField__Button2Cancel"
            onClick={function() {
              window.location.replace("/child");
            }}
          >
            <h3>Cancel</h3>
          </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default JournalEntry;
