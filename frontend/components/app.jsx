import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from "../utils/route_utils";
import ChirpIndexContainer from './chirps/chirp_index_container';
import Home from './home/home';
import signup_container from './session/signup_container';
import login_container from "./session/login_container";

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <Route path="/chirps" component={ChirpIndexContainer} />
    <ProtectedRoute path="/chirps" component={ChirpIndexContainer}/>
    <AuthRoute path="/signup" component={signup_container} />
    <AuthRoute path="/login" component={login_container} />
  </div>
);
