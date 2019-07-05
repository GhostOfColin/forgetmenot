import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      className: 'sample',
      arrows: false,
    };
    return (
      
      <div className="container-slider">

        <Slider {...settings}>
        <div className="slide">
          <h3>Get to-dos out of your head.</h3>
          <p>Stop thinking about your to-dos, and let the app remember for you</p>
        </div>
        <div className="slide">
          <h3>Get reminded, anywhere.</h3>
          <p>You'll never forget the milk (or anything else) again.</p>
        </div>
        <div className="slide">
          <h3>Get things done, together.</h3>
          <p>Share your lists and give tasks to other to get things done faster.</p>
        </div>
        <div className="slide">
        <h3>Everywhere you go.</h3>
          <p>ForgetMeNot is magically in sync on all your devices.</p>
        </div>
        </Slider>
      </div>
    );
  }
}