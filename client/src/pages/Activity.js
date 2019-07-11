import React, { Component } from "react";

import Modal from "react-modal";
import NewActivity from "../components/NewActivity/NewActivity";

class Activity extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalsOpen: false });
  };

  render() {
    return (
      <div className="container-fluid activity-image">
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <NewActivity click={this.closeModal} />
        </Modal>

        <div className="row">
          <div className="col-md-12 page-title">
            <h1>Child's Sleep / Feeding / Diaper Schedule</h1>
            <button className="btn btn-success" onClick={this.openModal}>
              New Activity
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
