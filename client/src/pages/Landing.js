import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./landing.css";
import CarouselSlide from "../components/Carousel";

class Landing extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <CarouselSlide />
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
