import React, { Component } from "react";
import "./Childcard.css";
import API from "../../util/API";
import moment from 'moment';
import "../EditChild/EditChild"

class Childcard extends Component {
    state = {
        name: "",
        dob: "",
        id: "",
        data: []
    };

    componentDidMount() {
        API.getChildren(localStorage.getItem("user-id")).then(res => {
            this.setState({
                data: res.data
            });
            console.log(res.data);
        });
    }

    handleClick = (id, name) => {
        localStorage.setItem("child-id", id);
        localStorage.setItem("child-name", name);

        window.location.replace("/child", this.props)
    }

    handleEditClick = (id, name, dob) => {
        localStorage.setItem("child-id", id);
        localStorage.setItem("child-name", name);
        localStorage.setItem("child-dob", dob);
        API.getOneChild(localStorage.getItem("child-id")).then(res => {
            // console.log("here is the data before it goes into state ", res.data)
            this.setState({
                childData: res
            });
            console.log(res);
        })

        window.location.replace("/EditChild", this.props)
    }


    render() {
        return (
            <div>
                {this.state.data.map(child => (
                    <div className="card">
                        <div className="card-header"><h3>{child.name}</h3></div>
                        <div className="card-body">
                            <h4>Birthday: {moment.utc(child.dob).format("ll")}</h4>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary childBtn" onClick={() => this.handleEditClick(child.id, child.name, child.dob)}>
                                <h5>Edit</h5>
                            </button>
                            <button className="btn btn-warning childBtn" onClick={() => this.handleClick(child.id, child.name)}>
                                <h5>Select </h5>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Childcard;
