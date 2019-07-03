import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => { 
  debugger;
  return ( 
    <div className="landing-page">
      <nav className="landing-page-header">
        <div className="landing-page-links">
          <button className="guest-button" onClick={() => this.props.demo()}>Try it as a Guest</button>
          <Link to="/login"><button className="sign-in-button">Sign in</button></Link>
          <Link to="/signup"><button className="create-account-button" >Sign up for free</button></Link>
        </div>  
      </nav> 
    </div>
  )
}

const demo = (e) => {
  e.preventDefault();
  debugger;
  this.props.login({username: "guest", password: "password"})
}

export default LandingPage;