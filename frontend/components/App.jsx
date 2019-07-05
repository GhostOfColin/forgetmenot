import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HomePageContainer from './home_page/home_page_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NoMatch from './no_match';

const App = () => (
  <div className="application">

    <Switch>
      <Route exact path="/" component={HomePageContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route component={NoMatch}/>
    </Switch>

  </div>
);

export default App;