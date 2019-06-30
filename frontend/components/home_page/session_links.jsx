import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => { 

  return ( 
    <div>
      <nav className="login-signup">
        <Link to="/login"><button className="sign-in-button">Sign in</button></Link>
        <Link to="/signup"><button className="create-account-button" >Create account</button></Link>
      </nav> 
    </div>
  )
}

export default sessionLinks;