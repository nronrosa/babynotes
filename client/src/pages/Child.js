import React from "react";
import Sleep from "../components/SleepTable/SleepTable";
import Feeding from "../components/FeedingTable/FeedingTable";
import Change from "../components/ChangeTable/ChangeTable";
import "./child.css";
import JournalTable from "../components/JournalTable/Journaltable";
// import ActivityEdit from "../components/editForms/ActivityEdit";
import { Link } from "react-router-dom";
import API from "../util/API";

class Child extends React.Component {
  state = {
    journalData: [],
    eatingData: [],
    sleepingData: [],
    diaperData: []
  };

  updateParentState = updatedArray => {
    this.setState({ oldArrayName: updatedArray });
  };

  componentDidMount() {
    API.getAllJournalActivities(localStorage.getItem("child-id")).then(res => {
      this.setState({
        data: res.data
      });
      // console.log("this is the Activities data")
      // console.log(res.data);
      var journalArray = [];
      var eatingArray = [];
      var sleepingArray = [];
      var diaperArray = [];
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].actList_Id === "1") {
          journalArray.push(res.data[i]);
        } else if (res.data[i].actList_Id === "2") {
          sleepingArray.push(res.data[i]);
        } else if (res.data[i].actList_Id === "3") {
          diaperArray.push(res.data[i]);
        } else {
          eatingArray.push(res.data[i]);
        }
      }
      console.log("journal ", journalArray);
      // this.setState({ journal: journalArray })
      console.log("sleeping ", sleepingArray);
      console.log("diaper ", diaperArray);
      console.log("feeding ", eatingArray);

      this.setState(
        {
          journalData: journalArray,
          eatingData: eatingArray,
          sleepingData: sleepingArray,
          diaperData: diaperArray
        },
        () => {
          setTimeout(() => {
            console.log(this.state);
          }, 2000);
        }
      );
    });
  }

  render() {
    return (
      <div className="container-fluid childPage">
        <div className="row">
          <div className="col-md-12 page-title">
            <h1 className="kidTitle">
              {localStorage.getItem("child-name")}'s Notes{" "}
            </h1>

            <div className="kidsBtn">
              {localStorage.getItem("user-id") ? (
                <button
                  className="btn childBtn"
                  onClick={function() {
                    window.location.replace("/newActivity");
                  }}
                >
                  Post new activity
                </button>
              ) : (
                <h5>Please sign in </h5>
              )}
            </div>

            <div className="kidsBtn">
              {localStorage.getItem("user-id") ? (
                <button
                  className="btn childBtn"
                  onClick={function() {
                    window.location.replace("/journalEntry");
                  }}
                >
                  Create Journal Entry{" "}
                </button>
              ) : (
                <h5> </h5>
              )}
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {/* <div className="tableElement col-md-1" /> */}
            <div className="tableElement col-md-5">
              <h2 className="tableHeader">Journal</h2>
              <JournalTable
                journalData={this.state.journalData}
                updateParentState={this.props.updateParentState}
              />
            </div>
            <div className="tableElement col-md-5">
              <h2 className="tableHeader">Sleep</h2>
              <Sleep
                sleepingData={this.state.sleepingData}
                updateParentState={this.props.updateParentState}
              />
            </div>
          </div>
          <div className="row">
            <div className="tableElement col-md-5">
              <h2 className="tableHeader">Diaper Change</h2>
              <Change
                diaperData={this.state.diaperData}
                updateParentState={this.props.updateParentState}
              />
            </div>
            {/* <div className="tableElement col-md-1" /> */}
            <div className="tableElement col-md-5">
              <h2 className="tableHeader">Eat</h2>
              <Feeding
                eatingData={this.state.eatingData}
                updateParentState={this.props.updateParentState}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Child;
