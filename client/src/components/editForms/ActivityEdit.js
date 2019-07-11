// import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
// import "./NewActivity.css";
import API from "../../util/API";
// import moment from 'moment';

class ActivityEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 2,
            date: '',
            startTime: '',
            endTime: '',
            observations: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount(id) {
        let description = "";
        console.log("Edit page fired");
        API.getOneActivity(35).then(res => {
            this.setState({
                data: res.data
            })
            console.log(res.data.description)

            console.log(this.state.data.description)
            description = this.state.data.description
        }
        )
    };


    handleChange = event => {
        let target = event.target;
        let name = target.name;
        this.setState({
            [name]: event.target.value
        });
    };

    getActivityData = (id) => {
        API.getOneActivity(id);
    };

    updateActivityData = (data) => {
        API.putOneActivity(data);
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
        }
        this.createNewActivity(activityData);
        window.location.replace("/child", this.props);
    };

    // console.log("third time", this.state.data.description)

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <div className="FormCenter"> */}
                        <form className="FormFields">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="type">Activity</label>
                                <select id="actList" className="FormField__Input" placeholder="Type of activity" name="type" value={this.state.type} onChange={this.handleChange}>
                                    <option value="2">Sleep</option>
                                    <option value="3">Diaper Change</option>
                                    <option value="4">Feeding</option>
                                </select>
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="date">Date</label>
                                <input type="date" id="date" className="FormField__Input" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange} />
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="start">Start</label>
                                <input type="time" id="start" className="FormField__Input" placeholder="Start" name="startTime" value={this.state.startTime} onChange={this.handleChange} />
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="end_time">End Time</label>
                                <input type="time" id="end" className="FormField__Input" placeholder="End" name="endTime" value={this.state.endTime} onChange={this.handleChange} />
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="observations">Observations</label>
                                <input type="text" id="observations" className="FormField__Input" placeholder={this.state.description} name="observations" value={this.state.description} onChange={this.handleChange} />
                            </div>
                            <div className="FormField">
                                <button
                                    className="FormField__Button mr-20"
                                    onClick={this.handleSubmit}

                                >
                                    <h3>Add New Activity</h3>
                                </button>
                                <button
                                    className="FormField__Button mr-20"

                                    onClick={this.props.closeModal}
                                >
                                    <h3>Cancel</h3>
                                </button>
                            </div>
                        </form>
                        {/* </div> */}
                    </div>
                </div>
            </div >
        );
    }
}
export default ActivityEdit;



  // Original code - Lance rewrote only to match code in create Child
  // handleChange = (event) => {
  //   let target = event.target;
  //   let name = target.name;
  //   this.setState({
  //     [name]: event.target.value
  //   });
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   console.log('The form was submitted with the following data:');
  //   console.log(this.state);
  // }
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleChange = event => {
  //   let target = event.target;
  //   let name = target.name;

  //   this.setState({
  //     [name]: event.target.value
  //   });
  // };


// class NewActivity extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleShow = this.handleShow.bind(this);
//     this.handleClose = this.handleClose.bind(this);

//     this.state = {
//       show: false,
//       date: '',
//       startTime: '',
//       endTime: '',
//       observations: '',
//     };
//   }

//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }

//   handleChange =(event) =>{
//     let target = event.target;
//     let name = target.name;

//     this.setState({
//         [name]: event.target.value
//       });

//     console.log('The form was submitted with the following data:');
//     console.log(this.state);
//   }




//   render() {
//     return (
//       <>
//         <Button variant="primary" onClick={this.handleShow}>
//           Let's create new Activity
//         </Button>

//         <Modal show={this.state.show} onHide={this.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>New Activity Time</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           <div className="container">
// //         <div className="row">
// //           <div className="col-md-12">
// //             <div className="FormCenter">
// //               <form onSubmit={this.handleSubmit} className="FormFields">
// //                 <div className="FormField">
// //                   <label className="FormField__Label" htmlFor="date">Date</label>
// //                   <input type="text" id="date" className="FormField__Input" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange} />
// //                 </div>
// //                 <div className="FormField">
// //                   <label className="FormField__Label" htmlFor="Start Time">Start Time</label>
// //                   <input type="text" id="start time" className="FormField__Input" placeholder="Start Time" name="start time" value={this.state.startTime} onChange={this.handleChange} />
// //                 </div>
// //                 <div className="FormField">
// //                   <label className="FormField__Label" htmlFor="notes">End Time</label>
// //                   <input type="text" id="end time" className="FormField__Input" placeholder="End Time" name="end time" value={this.state.endTime} onChange={this.handleChange} />
// //                 </div>
// //                 <div className="FormField">
// //                   <label className="FormField__Label" htmlFor="observations">Observations</label>
// //                   <input type="text" id="observations" className="FormField__Input" placeholder="Oberservations" name="observations" value={this.state.observations} onChange={this.handleChange} />
// //                 </div>
// //                 <div className="FormField">
// //                   <button className="FormField__Button mr-20"><h3>Add New Activity</h3></button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={this.handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
// }

// <script>
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })
// </script>

// render(<NewActivity />);





// import React, { Component } from 'react';
// import "./NewActivity.css";

