import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
import API from "../../util/API";
// import Home from "../../pages/Home";

class createChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            dob: "",
            UserId: localStorage.getItem("user-id")
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
            UserId: localStorage.getItem("user-id")
        }
        this.createNewChild(childData);
        window.location.replace("/home")

    };

    createNewChild = (data) => {
        API.postOneChild(data)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron2">
                            <h1 className="jumboBanner2">Create A Child</h1>
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
                                    {/* {this.state.isValid ? <Redirect to="/" /> : null} */}
                                    <button
                                        className="FormField__Button"
                                        onClick={this.handleSubmit}
                                    >
                                        <h3>Add child <i className="fa fa-user-plus"></i></h3>
                                    </button>
                                </div>
                            </form>
                            <button className="FormField__Button2Cancel" onClick={function () { window.location.replace("/Home") }}> <h3>Cancel</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default createChild;
