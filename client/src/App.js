import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Child from "./pages/Child";
import createChild from "./components/CreateChild/createChild";
import EditChild from "./components/EditChild/EditChild";
import Home from "./pages/Home";
import SignIn from "./components/SignIn/SignIn";
import JournalEntry from "./components/JournalEntry/JournalEntry";
import NewActivity from "./components/NewActivity/NewActivity";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Activity from "./pages/Activity";
import Landing from "./pages/Landing";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import ActivityEdit from "./components/editForms/ActivityEdit";
// import API from "./util/API";

class App extends Component {
  state = {
    user: null
  };

  setUser = user => this.setState({ user });

  componentDidMount = () => {};

  render() {
    return (
      <Router>
        <Navbar setUser={this.setUser} user={this.state.user} />
        <br />
        <div className="container-fluid MainPage">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route
                  exact
                  path="/home"
                  component={() =>
                    localStorage.getItem("user-id") ? <Home /> : <Landing />
                  }
                />
                <Route exact path="/RegisterForm" component={RegisterForm} />
                <Route exact path="/SignIn" component={SignIn} />
                <Route exact path="/activity" component={Activity} />
                <Route exact path="/child" component={Child} />
                <Route exact path="/createChild" component={createChild} />
                <Route exact path="/EditChild" component={EditChild} />
                <Route exact path="/journalentry" component={JournalEntry} />
                <Route exact path="/newActivity" component={NewActivity} />
                <Route exact path="/ActivityEdit" component={ActivityEdit} />
                {/* <Route component={NotFound} /> */}
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}
export default App;
