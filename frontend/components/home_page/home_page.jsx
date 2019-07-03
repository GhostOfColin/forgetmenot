import React from 'react';
import { Link } from 'react-router-dom';
import LandingPage from './landing_page';
import Header from '../header/header';

class HomePage1 extends React.Component { 
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  demo(e) {
    e.preventDefault();
    this.props.login({username: "guest", password: "password"})
  }

  homePage() {

    return (
      
    <div>
      <Header/>
      <div className="logout-button">
        
        {<button onClick={() => this.logout()} className="logout-button">Logout</button>}

      </div>

    </div>  
      
    )
  };

  render() {
    if (this.props.currentUser) {
      return this.homePage()
    } else {
      return <LandingPage props={this.demo}/>;
    }
  }
    
};


export default HomePage1;