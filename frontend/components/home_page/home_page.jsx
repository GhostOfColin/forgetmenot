import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinks from './session_links';

class Greeting extends React.Component { 
  constructor(props) {
    super(props);
  }

  homePage() {

    return (
      
    <div className="home-page-wrapper">
      
      Homepage

    </div>)
  };

  render() {
    if (this.props.currentUser) {
      return this.homePage()
    } else {
      return <SessionLinks/>;
    }
  }
    
};


export default Greeting;