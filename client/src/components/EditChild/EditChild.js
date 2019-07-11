import React, { Component } from "react";
import API from "../../util/API";
import moment from 'moment';

// import { Link, Redirect } from "react-router-dom";
// import Home from "../../pages/Home";

class EditChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem("child-name"),
            dob: localStorage.getItem("child-dob"),
            id: localStorage.getItem("child-id")
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleChange = event => {
        let target = event.target;
        let name = target.name;

        this.setState({
            [name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        let childData = {
            name: this.state.name,
            dob: this.state.dob,
            id: localStorage.getItem("child-id")
        }
        this.editOneChild(this.state.id, childData)
        // setTimeout(function () { window.location.replace("/home") }, 3000);
        // console.log("this is the ID plus the data" + this.state.id, childData)
        // 

    };

    editOneChild = (id, data) => {
        API.putOneChild(id, data)
            .then(data => window.location.replace("/home"))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron3">
                            <h1 className="jumboBanner3">Edit</h1>
                        </div>
                    </div>
                    <div className="col-md-6 registerPage">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="Babyname">Child Name</label>
                                    <input
                                        type="text"
                                        id="babyname"
                                        className="FormField__Input"
                                        placeholder="Child Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="Birthdate">Birthdate</label>
                                    <input
                                        type="date"
                                        id="birthdate"
                                        className="FormField__Input"
                                        placeholder="MM/DD/YYYY"
                                        name="dob"
                                        value={this.state.dob}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <button
                                        className="FormField__Button mr-20"
                                        onClick={this.handleSubmit}
                                    >
                                        <h3>Edit child <i className="fa fa-user-plus"></i></h3>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <button className="FormField__Button2Cancel" onClick={function () { window.location.replace("/Home") }}> <h3>Cancel</h3>
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}
export default EditChild;
