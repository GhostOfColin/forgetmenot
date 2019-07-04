import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinks from './session_links';

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
      return <SessionLinks/>;
    }
  }
    
};


export default HomePage1;