import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component { 

  constructor(props) {
    super(props);
    this.demo = this.demo.bind(this);
  }

  demo(e) {
    e.preventDefault();
    this.props.login({username: "guest", password: "password"});
  }

  render() {
    return ( 
      <div className="landing-page">
        <nav className="landing-page-header">
          <div className="landing-page-links">
            <button className="guest-button" onClick={this.demo}>Try it as a Guest</button>
            <Link to="/login"><button className="sign-in-button">Sign in</button></Link>
            <Link to="/signup"><button className="create-account-button" >Sign up for free</button></Link>
          </div>  
        </nav> 
      </div>
    )
  }
}



export default LandingPage;