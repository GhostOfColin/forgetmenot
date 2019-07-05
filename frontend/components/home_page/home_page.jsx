import React from 'react';
import { Link } from 'react-router-dom';
import LandingPage from './landing_page';

class HomePage1 extends React.Component { 
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  homePage() {

    return (
      
    <div className="logout-button">
      
      {<button onClick={() => this.logout()} className="logout-button">Logout</button>}

    </div>)
  };

  render() {
    if (this.props.currentUser) {
      return this.homePage()
    } else {
      return <LandingPage login={this.props.login}/>;
    }
  }
  
};


export default HomePage1;