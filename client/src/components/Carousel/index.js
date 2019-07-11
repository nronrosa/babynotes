import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from 'react-router-dom';

class CarouselSlide extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src="./img/flowers.jpg" alt="First slide" />
          <Carousel.Caption>
            <h1 className="welcomeTitle">Welcome to Baby Notes</h1>
            <h5 className="carouselText">Babies bring long days and short years for new parents!</h5>
            <h5 className="carouselText">Baby Notes makes it easy to track Baby's daily activities and record </h5>
            <h5 className="carouselText">milestone moments from first smiles to first steps and beyond!</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="./img/deskPic.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="welcomeTitle">Organize Daily Moves</h1>
            <h5 className="carouselText">It's easy to track feeding times, sleeping schedule, and </h5>
            <h5 className="carouselText">diaper changes to monitor growth and developments in real time.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="./img/sleepingBaby.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="welcomeTitle3">Sign Up Now!</h1>
            <h5 className="carouselText3">Register for an account or sign in now!</h5>
            <button className="btn carouselBtn1"><Link to="/RegisterForm">Register</Link></button>
            <button className="btn carouselBtn2"><Link to="/SignIn">Sign In</Link></button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
    );
  }
}

export default CarouselSlide;
