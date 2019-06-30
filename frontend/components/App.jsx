import React from 'react';
import { Route } from 'react-router-dom';

import Header from './header/header';
import HomePage from './home_page/home_page_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <Header/>
      <HomePage/>
    </header>
    
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;